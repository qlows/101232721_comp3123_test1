const fs = require("fs");

const createLogs = () => {
    const target = "./logs";
    if(!fs.existsSync(target)){
        fs.mkdirSync(target);
    }
    process.chdir(target);
    for(let x = 0; x < 10; x++){
        fs.writeFile(`log${x}.txt`, `Log file number is ${x}`, (error) =>
        error ? console.error(`Error creating file log${x}.txt`):
        console.log(`Creating log${x}.txt`));
    }
};

const removeLogs = () => {
    const target = "./logs";
    if(fs.existsSync(target)){
        process.chdir(target);
        fs.readdir(process.cwd(), (error, files) => {
            files.forEach((file) => {
                fs.unlink(file, (error) =>
                error ? console.error(`Error deleting ${file}`) :
                console.log(`Deleting ${file}`));
            });
        });
    }
}

createLogs();
removeLogs();