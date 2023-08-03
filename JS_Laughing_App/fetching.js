
const jokes = document.querySelector("#Djoke");
const bt = document.querySelector("#btn");
const head = document.querySelector("#heading");
// const generateJokes = () => {

//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', setHeader)
//         .then((res) => {
//             return res.json()
//         })
//         .then((data) => {
//             jokes.innerHTML = data.joke;
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// using async await


const generateJokes = async () => {

    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com/', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }
    catch (error) {
        console.log(`found with error ${error}`);
    }
}

bt.addEventListener('click', generateJokes);
generateJokes();

let on = true;

const changetxt = () => {
    // let click = true;
    head.innerHTML = "Happy Happy❤️"

    const again = () => {
        head.innerHTML = "😍Best jokes to make your Day😍"
    }
    head.addEventListener('click', again);
}
head.addEventListener('click', changetxt);