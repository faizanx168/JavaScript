// https://swapi.dev/api/people/1
// const req = new XMLHttpRequest();

var container = document.querySelector('.data');

// fetch('https://swapi.dev/api/people/1')
// .then((res) =>{
//     console.log("success");
//     return res.json()})

// .then((datares)=>{
//     console.log(datares);

//     var newContent = '';
//     newContent += '<p>Name: ' + datares.name + '</p>'; 
//     newContent += '<div>Eyecolor: ' + datares.eye_color + '</div>';
//     newContent += '<div> Data:' + datares + '</div>';
//     container.innerHTML = newContent;
//     console.log(newContent);
// })

// .catch( (ress)=>{
//     console.log("Opppss! an Error occured");
//     console.log(ress.status);
// })


// req.open("Get", "https://swapi.dev/api/people/1");
// req.send();
// axios.get('https://swapi.dev/api/people/1/')
// .then(datares =>{
//     console.log(datares);

//     var newContent = '';
//     newContent += '<p>Name: ' + datares.name + '</p>'; 
//     newContent += '<div>Eyecolor: ' + datares.eye_color + '</div>';
//     newContent += '<div> Data:' + datares + '</div>';
//     container.innerHTML = newContent;
//     console.log(newContent);
// }).catch( (ress)=>{
//     console.log("Opppss! an Error occured");
//     console.log(ress.status);
// })
var newContent = '';
const getStarWars = async (id) =>{
    const datares = await axios.get(`https://swapi.dev/api/people/${id}`)
    console.log(datares);
    newContent += '<div>Name: ' + datares.data.name + '</div>'; 
    newContent += '<div>Eyecolor: ' + datares.data.eye_color + '</div>';
    newContent += '<div> Data:' + datares.data.birth_year + '</div> <br>';
    container.innerHTML = newContent;
    console.log(newContent);
    
}
for( id= 1; id <60; id++){
    getStarWars(id);   
}
