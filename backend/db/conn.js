import mongoose from "mongoose";

async function main() {

    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://gabriel:hMil8uyFzUI3lE2Q@newfest.ul5pfj2.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("conectado ao banco");
    } catch (error) {
        console.log(`Erro: ${error}` );
    }

}

export default main;