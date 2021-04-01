function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    };
    
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch('http://localhost:3000/users', configObj)
    .then(resp => resp.json())
    .then(obj => {
       const h2 = document.createElement('h2');
       h2.innerHTML = obj.id
       document.body.appendChild(h2);
    })
    .catch(error => {
        const h3 = document.createElement('h3');
        h3.innerHTML = error.message;
        document.body.appendChild(h3);
    });
};