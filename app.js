import crypto from 'crypto';

class UserManager {

    static users = [];

    // metodo para crear usuarios 
    static usersCreator(userData) {
        // hashear la pw
        const hashedPassword = crypto.createHash("sha256").update(userData.password).digest("hex")
        // crear usuarios
        const newUser = {
            nombre: userData.nombre,
            apellido: userData.apellido,
            email: userData.email,
            password: hashedPassword // hashea la password
        }
        // una vez creado el user se agrega a users
        this.users.push(newUser)
    }

    // mostrar usuarios

    static showUsers() {
        this.users.forEach(e => console.log(`Nombre ${e.nombre} ,Apellido ${e.apellido} ,Email ${e.email}`))
    }

    // validar usuarios

    static validateUsers(email, password) {
        // encontrar el usuario dentro de users
        const searchUser = this.users.find(user => user.email === email)
        if (!searchUser) {
            console.log('No hay usuarios con ese email')
            return
        }

        // verificar la constraseña
        const verifyPass= crypto.createHash("sha256").update(password).digest("hex")

        if( searchUser.password === verifyPass ){
            console.log('usuario logeado con exito')
        }else{
            console.log('error en la constraseña')
        }

    }


}

UserManager.usersCreator({
    nombre: 'German',
    apellido: 'Pagano',
    email: 'example@gmail.com',
    password: '123456'
})


UserManager.usersCreator({
    nombre: 'Gustavo',
    apellido: 'Rios',
    email: 'Gustavo@gmail.com',
    password: '123456'
})

//UserManager.showUsers()

UserManager.validateUsers('example@gmail.com','12345')