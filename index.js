const fs = require("fs");
const content = new Date().toString();
const path = "current-date-time.txt";

try{
    fs.writeFileSync(path , content);
    fs.readFile(path, "utf8", (err, data) => {
        if (err){
            console.log(err);
        } else{
            console.log(data);
        }
    });
} catch (err) {
    console.log(error);
}