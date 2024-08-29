const ToDoModel= require("../models/ToDoModels")

module.exports.getToDos = async (req ,res)=>{
    const toDos = await ToDoModel.find()
    res.send(toDos)
}

module.exports.saveToDos =  (req ,res)=>{
    const {toDo} = req.body
    

    ToDoModel.create({toDo})
    .then(data => {
        console.log("Saved successfully..");
        res.status(201).send(data);
    })
    .catch((err) => {
        console.log(err);
    res.send({error:err,msg:"Something went wrong"});
});
};

module.exports.updateToDos =  (req ,res)=>{
    const {id} = req.params;
    const {toDo} = req.body;
    

    ToDoModel.findByIdAndUpdate(id, {toDo})
    .then(() => {
       
        res.send("Updated successfully");
    })
    .catch((err) => {
        console.log(err);
    res.send({error:err,msg:"Something went wrong"});
});
};


module.exports.deleteToDos =  (req ,res)=>{
    const {id} = req.params
    

    ToDoModel.findByIdAndDelete(id)
    .then(data => {
       
        res.send("deleted successfully");
    })
    .catch((err) => {
        console.log(err);
    res.send({error:err,msg:"Something went wrong"});
});
};