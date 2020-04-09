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
    const squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];
    //  Example
     robot.hear(/javascript/i, function(msg) {
       return msg.send("I love writing code!");
     });

    robot.hear(/hi|hello/i, function(msg) {
      return msg.send("Howdy! I'm MikeBot, type '@mikebot what can you do?' to see what I'm all about!");
    });

    robot.respond(/what can you do/i, function(msg) {
      return msg.send("Here's are what I can do, type @mikebot and one of the following commands:\n music")
    });

    robot.respond(/music/i, function(msg) {
      return msg.send("If you want to recommendations for bands, type what genre you're into + 'bands' (i.e. 'punk bands') and I'll set you up with some good tunes, you can also type 'playing soon' to see what cool shows are coming up in the Bay Area?")
    });

    robot.respond(/(.*) bands/i, function(res) {
      let genre;
      genre = res.match[1];
      if (genre === "punk") {
        return res.reply("I've been diggin' Crass, Aus-Rotten, G.I.S.M., and Blatz");
      } else if (genre === "rock") {
        return res.reply("The best rock was in the '60s check out The Kinks, Love, 13th floor elevators, and Velvet Underground");
      } else if (genre === "hiphop") {
        return res.reply("I really dig Heiroglyphics, Deltron, MF Doom, Living Legends, and Anti-pop Consortium");
      }
    });

    robot.hear(/playing soon/i, function(msg) {
      return msg.send("Check out this website for the latest shows:\n http://www.foopee.com/punk/the-list/");
    });

    lulz = ['lol', 'rofl', 'lmao'];
    robot.respond(/lulz/i, function(res) {
      return res.send(res.random(lulz));
    });

    return robot.hear(/ship it/i, function(msg) {
      return msg.send(msg.random(squirrels));
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