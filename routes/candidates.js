var router = require('express').Router();
var presidential = [{name: "butthole", origin: "colon"}];
var senate = [];
var houseRep = [];
var stSupreme = [];

console.log('candidates is working');

router.get('/presidential', function(request, response){
    response.send(presidential)
    console.log(presidential);
})
// router.get('/mPentath', function(request, response){
//     var randomPentath = mPentath[randomindex(0, mPentath.length)]
//     response.send(randomPentath);
//     console.log(randomPentath);
// })
// router.get('/badminton', function(request, response){
//     var randomBaddie = badminton[randomindex(0, badminton.length)]
//     response.send(randomBaddie);
//     console.log(randomBaddie);
// })
// router.get('/boxing', function(request, response){
//     var randomBoxer = boxing[randomindex(0, boxing.length)]
//     response.send(randomBoxer);
//     console.log(randomBoxer);
// })


module.exports = router;
