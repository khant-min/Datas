const fs = require('fs');

// fs.writeFile('./docs/blog.txt', 'hello world', () => {
//     console.log('file is successfully written');
// })

// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) console.log(err);
//         console.log('folder is created');
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//     if (err) console.log(err)
//     console.log('folder is deleted');
// }) 
// }

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) console.log(err);
        console.log('file is successfully deleted');
    })  
}
