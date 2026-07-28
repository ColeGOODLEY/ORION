// =====================================
// ORION AI BRAIN CONNECTOR
// Model Connection Layer
// =====================================


const ORION_BRAIN = {


    provider: "OpenAI",

    model: "gpt-5.5-mini",


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

                        context:context

                    })

                }
            );



            if(!response.ok){

                throw new Error(
                    "Brain server unavailable"
                );

            }



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

ORION AI BRAIN STATUS:

Connection unavailable.

Core systems remain operational.

`;

        }


    }


};
