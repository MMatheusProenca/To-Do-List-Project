const express = require('express');

const router  = express.Router();

router.get('/', (req, resp) => {
   console.log("olá!");
   resp.send();
})

router.post('/', (req, resp) => {
   console.log(req.body);
   resp.status(200).send(req.body);
})

module.exports = router;