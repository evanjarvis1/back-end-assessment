const fortunes = ["You will pass away in a tragic accident", "Your smile darkens someone's day!", "Those nearest to you only tolerate you for your money", "On your deathbed, your only regret will be that you didn't end it sooner!", "If you were in the Spongebob universe, squidward wouldn't find you annoying!", "A aluminum egg of disappointment falls into your lap this month.", "Don't trust your intuition! Look where it's gotten you so far!", "An unpleasant surprise awaits you", "If you start to believe in yourself, you're an idiot!"];

user = {
    firstName: `Mike`,
    lastName: `Wazowski`
}

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },



    getFortune: (req, res) => {
        //const fortunes = ["You will pass away in a tragic accident", "Your smile darkens someone's day!", "Those nearest to you only tolerate you for your money", "On your deathbed, your only regret will be that you didn't end it sooner!", "If you were in the Spongebob universe, squidward wouldn't find you annoying!", "A aluminum egg of disappointment falls into your lap this month.", "Don't trust your intuition! Look where it's gotten you so far!", "An unpleasant surprise awaits you", "If you start to believe in yourself, you're an idiot!"];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    postFortune: (req, res) => {
        
        console.log(req.body)

        fortunes.push(req.body.userFortune)

        console.log(fortunes)

      
        res.status(200).send(`Fortune added!`);
    },

    deleteFortune: (req, res) => {
        
        console.log(req.body)

        fortunes.splice(0, fortunes.length)
        res.status(200).send(`All Fortunes deleted!`);
        
        console.log(fortunes)
        
      
    },

    updateName: (req, res) => {
        console.log(req.body)

        user.firstName = req.params.firstName
        user.lastName = req.params.lastName

        greetings = [`What's up ${user.firstName} ${user.lastName}!`, `Hi ${user.firstName} ${user.lastName}!`, `Hello ${user.firstName} ${user.lastName}!`, `Greetings ${user.firstName} ${user.lastName}!`]

        let randomIndex = Math.floor(Math.random() * greetings.length);
        let randomMessage = greetings[randomIndex];

        res.status(200).send(`${randomMessage}`)
    }


}