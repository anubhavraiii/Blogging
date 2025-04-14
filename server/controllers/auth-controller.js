export const home = async (req, res) => {
    try {
        res.status(200).send("Welcome here from controller again...");
    } catch (error) {
        console.log(error);        
    }
}

export const register = async (req, res) => {
    try {
        console.log(req.body);

        res.status(200).json({ message: req.body });
    } catch (error) {
        console.log(error);        
    }
}

