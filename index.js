function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({'name': name, 'email': email})
    })
    .then(resp => resp.json())
    .then(data => document.body.innerHTML = data.id)
    .catch(error => {
        alert('message')
        document.body.innerHTML = error.message
    })
}

