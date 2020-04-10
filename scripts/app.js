// Description:
//
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//

// module.exports = function(robot) {
//   robot.verb(parameter1, function(res) {
//      return res.command();
//    });
// };

module.exports = function(robot) {
    //  YOUR CODE HERE

    robot.hear(/hey|hello/i, function(msg) {
      return msg.send("Howdy! I'm MikeBot, type '@mikebot what can you do?' to see what I'm all about! hey");
    });

    robot.respond(/what can you do/i, function(msg) {
      return msg.reply("Here's are what I can do, type @mikebot and one of the following commands:\n music \n math")
    });

    robot.respond(/math/i, function(msg) {
      return msg.send("I can do basic math functions (bear with me I'm learning more complex algebra as we speak!) type in addition, subtraction, multiplication or division problems and I'll solve them!")
    });

    robot.respond(/music/i, function(msg) {
      return msg.send("If you want to recommendations for bands, type @mikebot + what genre you're into + 'bands' (i.e. 'punk bands')(p.s. at the moment I only know punk, rock, or hip hop) and I'll set you up with some good tunes, you can also type 'playing soon' to see what cool shows are coming up in the Bay Area?\n You can also try saying @mikebot play a random song if you want to be surprised")
    });
    
    robot.hear(/playing soon/i, function(msg) {
      return msg.send("Check out this website for the latest shows: \n http://www.foopee.com/punk/the-list/");
      //return msg.send("Check out this" + <a href='http://www.foopee.com/punk/the-list/'>#{@website}</a> + "for the latest shows");
    });
    
    //   robot.http("https://midnight-train")
    // .header('Accept', 'application/json')
    // .get() (err, res, body) ->
    //   # error checking code here

    //   data = JSON.parse body
    //   res.send "#{data.passenger} taking midnight train going #{data.destination}"

    robot.respond(/(.*) bands/i, function(res) {
      let genre;
      genre = res.match[1];
      if (genre === "punk") {
        return res.reply("I've been diggin' Crass, G.I.S.M., and Blatz. Type 'play' + the band name to get a sample!");
      } else if (genre === "rock") {
        return res.reply("The best rock was in the '60s check out The Kinks, Love, and 13th floor elevators. Type 'play' + the band name to get a sample!");
      } else if (genre === "hiphop") {
        return res.reply("I really dig Heiroglyphics, Living Legends, and Anti-pop Consortium. Type 'play' + the band name to get a sample!");
      }
    });

    robot.respond(/play (.*)/i, function(res) {
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
      }
    });
    
    // robot.hear(/play (.*)/i, function(msg) {
    //   let band = msg.match[1];
  
    //   switch (band) {
    //     case 'Crass':
    //       return msg.reply('https://www.youtube.com/watch?v=90RN42kBwaE');
    //     case 'G.I.S.M':
    //       return msg.reply('https://www.youtube.com/watch?v=UMvLvsdBzuE');

    //     default:
    //       return msg.reply(band + 'sucks');
    //   }
    // });

    randSong = ['https://www.youtube.com/watch?v=90RN42kBwaE', 'https://www.youtube.com/watch?v=Fy6iPyWfI3E', 'https://www.youtube.com/watch?v=kXOUmOFVFPo', 'https://www.youtube.com/watch?v=0OytJYBfwUk', 'https://www.youtube.com/watch?v=EtYS3EYjVyk', 'https://www.youtube.com/watch?v=nnXjxtfKFDM', 'https://www.youtube.com/watch?v=tNFwdpWwAQY', 'https://www.youtube.com/watch?v=UMvLvsdBzuE', 'https://www.youtube.com/watch?v=xDW3mCQ8qHU'];
    robot.hear(/play a random song/i, function(res) {
      return res.send(res.random(randSong));
    });
  
    robot.hear(/(.*)/i, function(res) {
      //take in res
      let result = res.match[1];
      //console.log(typeof result);
      //split the string

      let splitRes = result.split("+");
      //console.log(splitRes);
      //convert first string to number
      if (result.includes("+")) {
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
  
  /************************************
  EXAMPLES OF THE KEY HUBOT FUNCTIONS
  ************************************/
  
  /* Variables for random example */
  
  // const squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];
  
  // module.exports = function(robot) {
  //   /* Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" */
  //   return robot.respond(/hi|hello/i, function(msg) {
  //     return msg.send("Howdy!");
  //   });
  
  // //   /* Random Example
  // //   If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers */
  //   return robot.hear(/ship it/i, function(msg) {
  //     return msg.send(msg.random(squirrels));
  //   });
  // };