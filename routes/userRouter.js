const User = require('../models/User'); 
const router = require('express').Router()

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) throw new Error('User not found');
        res.json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

router.post('/', async(req, res) => {
    await User.create(req.body)
    .then(()=>{
        res.status(201).json({message: 'Cadastrado com com sucesso'});
    })
    .catch((err)=>{
        res.status(400).json({error: err});
    })
})

router.patch('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) throw new Error('User not found');
        await user.update(req.body);
        res.json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) throw new Error('User not found');
        await user.destroy();
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

module.exports = router;
