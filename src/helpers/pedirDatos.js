import data from '../data/data.json'

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(data);
        }, 500)
    })
}

export const pedirItemPorUsuario = (username) => {
    return new Promise((resolve, reject) => {
        
        const item = data.find((el) => el.username === username);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró el usuario"
            })
        }

    })
}