const url = "https://reqres.in/api/users"

function getLog(url) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            console.log(response)
        }
    }
    xhr.open('GET', url);
    xhr.send();
}
getLog(url)


function get(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            callback(response)
        }
    }
    xhr.open('GET', url);
    xhr.send();

}
const postURL = 'https://jsonplaceholder.typicode.com/posts'
get(postURL, (response) => {
    console.log(response)
})
