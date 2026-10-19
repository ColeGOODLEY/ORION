// =====================================
// ORION AI BRAIN CONNECTOR
// Feature Install Build 3.5
// Optional web research via the Cloudflare Worker
// =====================================

const ORION_BRAIN = {
    provider: "Hugging Face",
    model: "meta-llama/Llama-3.1-8B-Instruct",
    endpoint: "https://sparkling-meadow-17f4.colehgoodley.workers.dev",
    connected: false,

    async requestWorker(payload) {
        const response = await fetch(this.endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const raw = await response.text();
        let data;
        try { data = JSON.parse(raw); }
        catch { throw new Error("Worker returned an unreadable response."); }
        if (!response.ok) throw new Error(data.error || data.response || `Worker request failed (${response.status}).`);
        return data;
    },

    async think(prompt, context = {}) {
        try {
            console.log("ORION Brain Activated");
            const enrichedContext = { ...context };

            // Install-first behavior: search when a request likely needs current/external facts.
            // Search failures do not stop ordinary AI responses.
            if (typeof ORION_WEB_RESEARCH !== "undefined" && ORION_WEB_RESEARCH.shouldSearch(prompt)) {
                try {
                    const searchData = await this.requestWorker({ action: "search", query: prompt });
                    const results = Array.isArray(searchData.results) ? searchData.results : [];
                    enrichedContext.research = ORION_WEB_RESEARCH.formatResults(results);
                    enrichedContext.researchStatus = results.length ? "Search results retrieved" : "No search results returned";
                } catch (searchError) {
                    console.warn("ORION Web Research unavailable:", searchError.message);
                    enrichedContext.research = "Web research was requested but is currently unavailable. Be transparent about this and do not claim to have searched the web.";
                    enrichedContext.researchStatus = "Unavailable";
                }
            }

            const data = await this.requestWorker({
                action: "chat",
                model: this.model,
                prompt,
                context: {
                    identity: typeof ORION_IDENTITY !== "undefined" ? ORION_IDENTITY : {},
                    personality: typeof ORION_PERSONALITY !== "undefined" ? ORION_PERSONALITY : {},
                    memory: enrichedContext.memory || [],
                    conversation: enrichedContext.conversation || [],
                    reasoning: enrichedContext.reasoning || "",
                    knowledge: enrichedContext.knowledge || "",
                    analysis: enrichedContext.analysis || {},
                    research: enrichedContext.research || "",
                    researchStatus: enrichedContext.researchStatus || "Not requested"
                }
            });

            this.connected = true;
            return data.response || "ORION AI response unavailable.";
        } catch (error) {
            console.error("ORION Brain Error:", error);
            this.connected = false;
            return `ORION AI BRAIN ERROR:\n\n${error.message}\n\nCore systems remain operational.`;
        }
    }
};
