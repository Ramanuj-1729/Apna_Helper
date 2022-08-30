const helperRegisterController = {
    register(req, res, next){
        res.json({msg: "helper registeration done"});
    }
}

export default helperRegisterController;