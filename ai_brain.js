// =====================================
// ORION AI BRAIN CONNECTOR
// Model Connection Layer
// Memory + Identity Integration Build
// =====================================


const ORION_BRAIN = {


    provider: "Hugging Face",

    model: "meta-llama/Llama-3.1-8B-Instruct",


    connected:false,



    async think(prompt, context){


        try{


            console.log(
                "ORION Brain Activated"
            );



            const response = await fetch(

                "https://sparkling-meadow-17f4.colehgoodley.workers.dev",

                {

                    method:"POST",


                    headers:{

                        "Content-Type":
                        "application/json"

                    },


                    body:JSON.stringify({


                        model:this.model,


                        prompt:prompt,


                        context:{



                            // =====================================
                            // ORION IDENTITY
                            // =====================================

                            identity:

                            typeof ORION_IDENTITY !== "undefined"

                            ?

                            ORION_IDENTITY

                            :

                            "ORION identity unavailable.",




                            // =====================================
                            // PERSONALITY
                            // =====================================

                            personality:

                            typeof ORION_PERSONALITY !== "undefined"

                            ?

                            ORION_PERSONALITY

                            :

                            "ORION personality unavailable.",




                            // =====================================
                            // MEMORY
                            // =====================================

                            memories:

                            typeof getAllMemories === "function"

                            ?

                            getAllMemories()

                            :

                            "No memory system available.",




                            // =====================================
                            // BRAIN ANALYSIS
                            // =====================================

                            analysis:

                            context



                        }


                    })

                }

            );





            // =====================================
            // SERVER ERROR HANDLING
            // =====================================


            if(!response.ok){


                const errorText =
                await response.text();



                throw new Error(

                    errorText ||

                    "Brain server unavailable."

                );


            }





            // =====================================
            // RECEIVE AI RESPONSE
            // =====================================


            const data =
            await response.json();




            this.connected = true;



            return data.response;



        }



        catch(error){



            console.error(

                "ORION Brain Error:",

                error

            );



            this.connected = false;



            return `

ORION AI BRAIN ERROR:


${error.message}


Core systems remain operational.

`;

        }


    }


};
