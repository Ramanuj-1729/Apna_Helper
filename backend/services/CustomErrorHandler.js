class CustomErrorHandler extends Error {
    constructor(message, status) {
        super();
        this.status = status;
        this.message = message;
    }

    static alreadyExist(message){
        return new CustomErrorHandler(message, 409);
    }
}

export default CustomErrorHandler;
