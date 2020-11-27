const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://salim:Ster123@firstcluster.flytn.gcp.mongodb.net/twitter?retryWrites=true' ,
    {useNewUrlParser: true, useUnifiedTopology: true
            }).then(() => {console.log('connexion mongo db ok !')}).catch(err => {console.log(err)});
