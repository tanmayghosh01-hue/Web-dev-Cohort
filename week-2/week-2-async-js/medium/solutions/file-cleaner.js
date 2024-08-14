const fs = require('fs');


fs.readFile("a.txt", "utf-8", (err,data) => {

    if (err) {
        console.log(err)
    } else {
        console.log('reading done');
        console.log(data);
        let newData = data.trim();
        console.log(typeof newData);

        fs.writeFile('a.txt', newData, 'utf-8', (data, err) => {
            if (err) throw err;
        })
        return newData;
    } 
});

