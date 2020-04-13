module.exports = function(robot) {

    robot.hear(/hey|hello/i, function(msg) {
      return msg.send("Howdy! I'm MikeBot, type '@mikebot what can you do?' to see what I'm all about! hey");
    });

    robot.respond(/what can you do/i, function(msg) {
      return msg.reply("Here's are what I can do, type @mikebot and one of the following commands:\n music \n math \ngames")
    });

    robot.respond(/math/i, function(msg) {
      return msg.reply("I can do basic math functions type in simple addition, subtraction, multiplication or division problems and I'll solve them!")
    });

    robot.respond(/music/i, function(msg) {
      return msg.reply("If you want to recommendations for bands, type @mikebot + what genre you're into + 'bands' (i.e. 'punk bands')(p.s. at the moment I only know punk, rock, or hip hop) and I'll set you up with some good tunes, you can also type 'playing soon' to see what cool shows are coming up in the Bay Area?\n You can also try saying @mikebot play a random song if you want to be surprised")
    });
    
    robot.hear(/playing soon/i, function(msg) {
      return msg.send("Check out this website for the latest shows: \n http://www.foopee.com/punk/the-list/");
    });

    robot.respond(/games/i, function(msg) {
      return msg.reply("We can play anagrams together, just type: play anagrams")
    });

    robot.respond(/(.*) bands/i, function(res) {
      let genre;
      genre = res.match[1];
      if (genre === "punk") {
        return res.reply("I've been diggin' Crass, G.I.S.M., and Blatz. Type 'check out' + the band name to get a sample!");
      } else if (genre === "rock") {
        return res.reply("The best rock was in the '60s take a listen to The Kinks, Love, and 13th floor elevators. Type 'check out' + the band name to get a sample!");
      } else if (genre === "hiphop") {
        return res.reply("I really dig Heiroglyphics, Living Legends, and Anti-pop Consortium. Type 'check out' + the band name to get a sample!");
      }
    });

    robot.respond(/check out (.*)/i, function(res) {
      let band;
      band = res.match[1];
      if (band === "crass"|| band === "Crass") {
        return res.reply("https://www.youtube.com/watch?v=xDW3mCQ8qHU");
      } else if (band === "G.I.S.M."|| band === "g.i.s.m"|| band === "GISM"|| band === "gism"|| band === "G.I.S.M") {
        return res.reply("https://www.youtube.com/watch?v=UMvLvsdBzuE");
      } else if (band === "blatz" || band === "Blatz") {
        return res.reply("https://www.youtube.com/watch?v=tNFwdpWwAQY");
      } else if (band === "The Kinks"|| band === "the Kinks"|| band === "the kinks"|| band === "The kinks" || band === "kinks"|| band === "Kinks") {
        return res.reply("https://www.youtube.com/watch?v=nnXjxtfKFDM");
      }  else if (band === "Love"|| band === "love") {
        return res.reply("https://www.youtube.com/watch?v=EtYS3EYjVyk");
      } else if (band === "13th Floor Elevators"|| band === "13th floor elevators") {
        return res.reply("https://www.youtube.com/watch?v=0OytJYBfwUk");
      } else if (band === "Hieroglyphics"|| band === "hieroglyphics") {
        return res.reply("https://www.youtube.com/watch?v=kXOUmOFVFPo");
      } else if (band === "Living Legends"|| band === "living legends"|| band === "Living legends"|| band === "living Legends") {
        return res.reply("https://www.youtube.com/watch?v=Fy6iPyWfI3E");
      } else if (band === "Anti-Pop Consortium"|| band === "Anti-pop Consortium"|| band === "anti-pop Consortium"|| band === "anti-pop consortium") {
        return res.reply("https://www.youtube.com/watch?v=90RN42kBwaE");
      } else return res.reply("Sorry, I don't know that band, please choose from my recommendations")
    });

    randSong = ['https://www.youtube.com/watch?v=90RN42kBwaE', 'https://www.youtube.com/watch?v=Fy6iPyWfI3E', 'https://www.youtube.com/watch?v=kXOUmOFVFPo', 'https://www.youtube.com/watch?v=0OytJYBfwUk', 'https://www.youtube.com/watch?v=EtYS3EYjVyk', 'https://www.youtube.com/watch?v=nnXjxtfKFDM', 'https://www.youtube.com/watch?v=tNFwdpWwAQY', 'https://www.youtube.com/watch?v=UMvLvsdBzuE', 'https://www.youtube.com/watch?v=xDW3mCQ8qHU'];
    robot.hear(/play a random song/i, function(res) {
      return res.send(res.random(randSong));
    });

    robot.hear(/play anagrams/i, function(msg) {
      return msg.send("Ok, see how many words you can make with these! (only words with 3 or more letters count)\n reply with submit: and your word\ne a p t");
    });
    
    let score = 0; 
    robot.hear(/submit: (.*)/i, function(msg) {
      let word = msg.match[1];
      const affirmations = ['Yay', 'Woohoo', 'Yipee', 'Woo', 'Hooya', 'Sweet', 'Got it', 'Nice']
      if (score === 15) { 
        return res.reply('You win! No more words left')
      }
        switch (word) {
          case 'pate':
            score ++
            return msg.reply(msg.random(affirmations) + ", I'll add one to your score, currently you're at: " + score);
          case 'peat':
            score ++ 
            return msg.reply(msg.random(affirmations) + ", I'll add one to your score, currently you're at: " + score);;
          case 'tape':
            score ++ 
            return msg.reply(msg.random(affirmations) + ", I'll add one to your score, currently you're at: " + score);;
          case 'tepa':
            score ++ 
            return msg.reply(msg.random(affirmations) + ", I'll add one to your score, currently you're at: " + score);;
          case 'ape':
            score ++ 
            return msg.reply(msg.random(affirmations) + ", I'll add one to your score, currently you're at: " + score);;
          case 'apt':
            score ++ 
            return msg.reply(msg.random(affirmations) + ", I'll add one to your score, currently you're at: " + score);;
          case 'pat':
            score ++ 
            return msg.reply(msg.random(affirmations) + ", I'll add one to your score, currently you're at: " + score);;
          case 'pea':
            score ++ 
            return msg.reply(msg.random(affirmations) + ", I'll add one to your score, currently you're at: " + score);;
          case 'pet':
            score ++ 
            return msg.reply(msg.random(affirmations) + ", I'll add one to your score, currently you're at: " + score);;
          case 'tap':
            score ++ 
            return msg.reply(msg.random(affirmations) + ", I'll add one to your score, currently you're at: " + score);;
          case 'ate':
            score ++ 
            return msg.reply(msg.random(affirmations) + ", I'll add one to your score, currently you're at: " + score);;
          case 'eat':
            score ++ 
            return msg.reply(msg.random(affirmations) + ", I'll add one to your score, currently you're at: " + score);;
          case 'eta':
            score ++ 
            return msg.reply(msg.random(affirmations) + ", I'll add one to your score, currently you're at: " + score);;
          case 'tae':
            score ++ 
            return msg.reply(msg.random(affirmations) + ", I'll add one to your score, currently you're at: " + score);;
          case 'tea':
            score ++ 
            return msg.reply(msg.random(affirmations) + ", I'll add one to your score, currently you're at: " + score);;   

          default:
            return msg.reply('Sorry, not a word');
      }
    });
  
    robot.hear(/(.*)+(.*)/i, function(res) {
      //take in res
      let result = res.match[1];
      //console.log(typeof result);
      //split the string

      let splitRes = result.split("+");
      let split = result.split('');
      //console.log(splitRes);
      //convert first string to number
      if (split.indexOf("+") > -1) {
        return res.send(Number(splitRes[0]) + Number(splitRes[1]));
      }
      //check if there is + symbol
      //convert second part of string to number
      //add numbers
      //return/send number

      //return res.send(result);
    });

    robot.respond(/(.*)+(.*)/i, function(res) {
      //take in res
      let result = res.match[1];
      //console.log(typeof result);
      //split the string

      let splitRes = result.split("+");
      let split = result.split('');
      //console.log(splitRes);
      //convert first string to number
      if (split.indexOf("+") > -1) {
        return res.send(Number(splitRes[0]) + Number(splitRes[1]));
      }
      //check if there is + symbol
      //convert second part of string to number
      //add numbers
      //return/send number

      //return res.send(result);
    });

    robot.hear(/(.*)/i, function(res) {
      let result = res.match[1];
      let splitRes = result.split("-");

      if (result.includes("-")) {
        return res.send(Number(splitRes[0]) - Number(splitRes[1]));
      }
    });

    robot.hear(/(.*)/i, function(res) {
      let result = res.match[1];
      let splitRes = result.split("*");

      if (result.includes("*")) {
        return res.send(Number(splitRes[0]) * Number(splitRes[1]));
      }
    });

    robot.hear(/(.*)/i, function(res) {
      let result = res.match[1];
      let splitRes = result.split("/");

      if (result.includes("/")) {
        return res.send(Number(splitRes[0]) / Number(splitRes[1]));
      }
    });
  
  }
  
