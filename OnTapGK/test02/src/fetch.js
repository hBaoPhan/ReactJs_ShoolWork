// let url = "https://69831cd79c3efeb892a4738c.mockapi.io/wwa/todo"
import inputData from '../data.json'

export let fetchData = async () => {
    try {
        // let res = await fetch(url)
        // let data = await res.json()
        console.log(inputData)
        return inputData
    } catch (error) {
        console.log(error.message)
    }
}