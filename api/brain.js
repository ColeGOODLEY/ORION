// =====================================
// ORION BRAIN SERVER
// Secure AI Connection Layer
// =====================================


export default async function handler(req, res){


    // Allow ORION website requests

    res.setHeader(
        "Access-Control-Allow-Origin",
        "*"
    );


    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type"
    );


    if(req.method !== "POST"){

        return res.status(405).json({

            error:"Method not allowed"

        });

    }



    try{


        const {
            prompt,
            context,
            model
        } = req.body;



        const response =
        await fetch(
            "https://api.openai.com/v1/responses",
            {


                method:"POST",


                headers:{


                    "Content-Type":
                    "application/json",


                    "Authorization":
                    `Bearer ${process.env.OPENAI_API_KEY}`


                },


                body:JSON.stringify({

                    model:
                    model || "gpt-5.5-mini",


                    input:[

                        {

                            role:"system",

                            content:
                            "You are ORION, an intelligent strategic AI assistant. Maintain a calm, strategic, honest, and supportive personality."

                        },


                        {

                            role:"user",

                            content:

                            `
COMMAND:

${prompt}


CONTEXT:

${JSON.stringify(context)}

`

                        }

                    ]

                })


            }

        );



        const data =
        await response.json();



        res.status(200).json({

            response:
            data.output_text

        });



    }


    catch(error){


        console.error(
            error
        );


        res.status(500).json({

            error:
            "ORION brain connection failed."

        });


    }


}
