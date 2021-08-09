import bcrypt from 'bcryptjs'

const users = [

    {
        name: 'Admin User',
        email: 'admin@examlp.com',
        password: bcrypt.hashSync('Gopal12345',10),
        isAdmin: true
    },
    {
        name: 'Gopal',
        email: 'gopal@examlp.com',
        password: bcrypt.hashSync('Gopal12345',10),
        isAdmin: true
    },
    {
        name: 'Ravi',
        email: 'ravi@examlp.com',
        password: bcrypt.hashSync('Gopal12345',10),
        isAdmin: true
    }
 
]

export default users
