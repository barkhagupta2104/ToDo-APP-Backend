const ToDo = require('../model/ToDo');


//define route handler
exports.createTodo = async(req,res)=>{

    try{
        //extract titile ans des from req body
        console.log('Request Body:', req.body);
        const { title,description } = req.body;
        

        //create new todo obj and insert into db 
        //create() insertion kar raha hai
        const response = await ToDo.create({title,description});
         console.log(response);
        //send a json respond with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry created successfully"
            }
        );
    }
   catch(e){
        // console.error(e.message);
     console.log(e.message)
        // res.status(500)
        // .json({
        //     success:false,
        //     data:"interval server error",
        //     message:e.message,
        // })
   }
}