const Cities = require("../../MongoDB-Login-Sign-UP/models/City.model");
const Users = require("../../MongoDB-Login-Sign-UP/models/userSchema")
const Joi = require("joi");


const post = async (req, res) => {
    const Schema = Joi.object({
        cityName: Joi.string().required()
    });

    let validateSchema = Schema.validate(req.body);

    if (validateSchema.error) {
        return res.status(400).json({
            message: validateSchema.error.message || "Bad Request",
            code: 400
        })
    } else {
        validateSchema = validateSchema.value;
    }
    try {
        const existsCity = await Cities.findOne({cityName : req.body.cityName})
        if(existsCity){
            console.log("Already Exists city name...")
            return res.status(200).json({
                status: "Already Exists city name..."
            });
        }else{
            const result = await Cities.create(validateSchema)
            console.log("New City added successfully....")
            return res.status(200).json({
                status: "New City added successfully...."
            });
        }
        
    
    } catch (err) {
        console.log(err, 'Internal Server Error')
        return res.status(500).json({
            message: 'Internal Server Error',
            status: 500
        })
    }
}




const getCities = async(req, res) => {

    let result = await Users.findOne({email : req.body.email})
    let cityId = result.cityId
    console.log(cityId)
    let result1 = await Cities.findById({_id :ObjectId('60fede67c950ac83e0684745')})
    console.log(result1)
    let data = {
        username : result.username,
        email : result.email,
        city : result1
    }
    console.log(data)
    return res.status(200).json({
        status: data
    });
}


module.exports = { post , getCities}