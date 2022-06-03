export const fetchImage = async (url) =>{

    const data = await fetch( url);
    return data.url;
}


export const fetchData = (url)=>{
    
    return fetch(
        url,
        {
            headers :{
            }
        }
    ).then((response) =>{
        return response.json();
    }).then ((data) => {
        return data;
    });
    
};

export const  loginUser = async (credentials) =>{
    let data = await fetch(
        'users.json',
        {
            headers :{
                'Content-type': 'application/json',
                'Accept': 'application/json'     
            }
        }
    ).then((response) => {
        return response.json();
    });
    let user = data.filter( (it) => { return it.email === credentials.email && 
                                            credentials.password === it.password });
    return user[0];
};

export const registerUser = async (credentials) =>{
    const data = {
         "login"   : credentials.login,
         "password": credentials.password
    };
    const file = await fetch("users.json",
        {
            headers: {"Content-type": "application/json"}
        }
    ).then((response) => {
        return response.json()
    }).then((data) =>{
        return data
    });
    
    file.push(data);
};