// https://icanhazdadjoke.com/

var jokes = document.getElementById('jokes');
const button = document.querySelector('button');
const getjoke = async ()=>
{
    const head = { headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', head);
    console.log(res)
    const list = document.createElement('LI');
    list.append(res.data.joke);
    jokes.append(list);
}


button.addEventListener('click', getjoke)
    
