module.exports = bot => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

    let activities = [
        `Cores of pull power.`, `I love my creator`,
        `Enjoying my time with you!`, `Can i get some more of that?`,
        `Don't you all love me? ...Oh well.`, `Doing bot things.`,
        `What about we go out and have some cake?`, `Now with more splashes!`,
        `Wait, do I even have this?`, `I am also a CPU. No, really!`,
        `That's fine, 'cause nothing's gonna scare us now!`, `A little bit of this... a little bit of that... yes, that's it!`,
        `Having fun with ya!`, `Maximum explosion for maximum justice!`,
        `Now singing along you.`, `Damn! I should've finished my backlog before formatting Windows.`,
        `On a new home... I mean datacenter.`, `Hold my hand tight, we'll make it another night.`,
        `Last minute studying, huh?`, `Shounen surely has a lot of ripples.`,
        `an instance of Game.`, `More features than ever!`,
        `Bill Nye the science guy! *plays chinese theme*`, `Feels good to be at home with you <3`,
        `Hey, let's get this going!`, ` Isn't it colorful out there?`,
        `Your king is on fire!`, `in theaters near you!`,
        `Let's hope I finish my assignment on time.`, `Lets go and stick those protest signs somewhere less visible.`
    ];

    setInterval(function() {
        let activity = `${bot.prefix}help | ${activities[Math.floor(Math.random() * activities.length)]}`;
        bot.user.setActivity(activity, {type: 'PLAYING'}); //PLAYING, LISTENING, WATCHING, STREAMING

    }, 600000);
}
