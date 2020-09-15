const express = require('express')
const cors = require('cors')


const mockToken = '360af5aa3ea6c966cb3b52732d80a2c67a0e891d5da9f13c'
const mockUser = {
    id: 1,
    name: 'John Doe',
    email: 'john@doe.com',
}
const app = express()

app.use(cors())
app.use(express.json())

const router = express.Router()

router.get('/me', (req, res) => {
    // req.headers.authorization

    const headers = req.headers.authorization

    const token = headers && headers.split(' ')[1]

    if (token === mockToken) {
        return res.json({
            user: mockUser
        })
    } else {
        return res.status(401).json({ message: 'Invalid token' })
    }
})

router.post('/login', (req, res) => {
    const { email, password } = req.body

    if (email === 'admin@admin.com' && password === '123456') {
        return res.json({
            user: mockUser,
            token: mockToken,
        })
    } else {
        return res.status(401).json({
            message: 'Invalid password',
        })
    }
})

app.use('/api', router)

app.listen(12345, () => {
    console.log('Running at port 12345');
})