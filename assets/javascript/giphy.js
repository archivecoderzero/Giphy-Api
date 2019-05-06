var buttonsTopic = [];
var divider = 0;
var apiKey = "ieKS1cEoA0whNt3E5nXD19zwZzqeZo8I"; //FROM MY MAGICAL CAT BUTTON API
var searchResult = "";

//shorthanded console log
// function q(x){
//   console.log(x + " console log");
// };


var arrayOfwords = ["random", 'best', 'freak', 'apple', 'money', 'green', 'asd', "funny", "emotional", "fantastic", "great", "amusing", "fun", "cat", 'god', 'dog', "moose", "trees", "rick and morty", 'buzz', 'flames', 'winner', 'fantastic', 'first', 'undefined', 'spooky', 'amazing', 'genious', 'best', 'friend', 'orange', 'huey', 'you', 'reddit', 'background', 'dota', 'game of thrones', 'holy', 'artistic', "actinomorphies", "actinomorphous", "actinomorphy", "actinomyces", "actinomycete", "actinomycetes", "actinomycetous", "actinomycin", "actinomycins", "actinomycoses", "actinomycosis", "actinomycotic", "actinon", "rabid", "rabider", "rabidest", "rabidities", "rabidity", "rabidly", "rabidness", "rabidnesses", "rabies", "rabietic", "rabis", "raca", "racahout", "racahouts", "raccahout", "raccahouts", "raccoon", "raccoons", "race", "raceable", "racecard", "racecards", "racecourse", "racecourses", "raced", "racegoer", "racegoers", "racegoing", "racegoings", "racehorse", "racehorses", "racemate", "racemates", "racemation", "racemations" ,'afraid','aggressive','agonizing','agreeable','ahead','ajar',"fancy","fantastic","far"," far-flung"," fascinated","fast","fat faulty","fearful fearless","feeble feigned","female fertile","festive","few fierce","filthy","fine","finicky","first"," five"," fixed"," flagrant","flaky","flashy","flat","flawless","flimsy"," flippant","flowery","fluffy","fluttering"," foamy","foolish","foregoing","forgetful","fortunate","four frail","fragile","frantic","free"," freezing"," frequent"," fresh"," fretful","friendly","frightened frightening full fumbling functional","funny","furry furtive","future futuristic","fuzzy ","gabby","gainful","gamy","gaping","garrulous","gaudy","general gentle","giant","giddy","gifted","gigantic","glamorous","gleaming","glib","glistening glorious","glossy","godly","good","goofy","gorgeous","graceful","grandiose","grateful gratis","gray greasy great","greedy","green grey grieving","groovy","grotesque","grouchy","grubby gruesome","grumpy","guarded","guiltless","gullible gusty","guttural H habitual","half","hallowed","halting","handsome","handsomely","handy","hanging","hapless","happy","hard","hard-to-find","harmonious","harsh","hateful","heady","healthy","heartbreaking","heavenly heavy hellish","helpful","helpless","hesitant","hideous high","highfalutin","high-pitched","hilarious","hissing","historical","holistic","hollow","homeless","homely","honorable","horrible","hospitable","hot huge","hulking","humdrum","humorous","hungry","hurried","hurt","hushed","husky","hypnotic","hysterical","icky","icy","idiotic","ignorant","ill","illegal","ill-fated","ill-informed","illustrious","imaginary","immense","imminent","impartial","imperfect","impolite","important","imported","impossible","incandescent","incompetent","inconclusive","industrious","incredible","inexpensive","infamous","innate","innocent","inquisitive","insidious","instinctive","intelligent","interesting","internal","invincible","irate","irritating","itchy","jaded","jagged","jazzy","jealous","jittery","jobless","jolly","joyous","judicious","juicy","jumbled","jumpy","juvenile","kaput","keen","kind","kindhearted","kindly","knotty","knowing","knowledgeable","known","labored","lackadaisical","lacking","lame","lamentable","languid","large","last","late","laughable","lavish","lazy","lean","learned","left","legal","lethal","level","lewd","light","like","likeable","limping","literate","little","lively","lively","living","lonely","long","longing","long-term","loose","lopsided","loud","loutish","lovely","loving","low","lowly","lucky","ludicrous","lumpy","lush","luxuriant","lying","lyrical","macabre","macho","maddening","madly","magenta","magical","magnificent","majestic","makeshift","male","malicious","mammoth","maniacal","many","marked","massive","married","marvelous","material","materialistic","mature","mean","measly","meaty","medical","meek","mellow","melodic","melted","merciful","mere","messy","mighty","military","milky","mindless","miniature","minor","miscreant","misty","mixed","moaning","modern","moldy","momentous","motionless","mountainous","muddled","mundane","murky","mushy","mute","mysterious","naive","nappy","narrow","nasty","natural","naughty","nauseating","near","neat","nebulous","necessary","needless","needy","neighborly","nervous","new","next","nice","nifty","nimble","nine","nippy","noiseless","noisy","nonchalant","nondescript","nonstop","normal","nostalgic","nosy","noxious","null","numberless","numerous","nutritious","nutty","oafish","obedient","obeisant","obese","obnoxious","obscene","obsequious","observant","obsolete","obtainable","oceanic","odd","offbeat","old","old-fashioned","omniscient","one","onerous","open","opposite","optimal","orange","ordinary","organic","ossified","outgoing","outrageous","outstanding","oval","overconfident","overjoyed","overrated","overt","overwrought","painful","painstaking","pale","paltry","panicky","panoramic","parallel","parched","parsimonious","past","pastoral","pathetic","peaceful","penitent","perfect","periodic","permissible","perpetual","petite","petite","phobic","physical","picayune","pink","piquant","placid","plain","plant","plastic","plausible","pleasant","plucky","pointless","poised","polite","political","poor","possessive","possible","powerful","precious","premium","present","pretty","previous","pricey","prickly","private","probable","productive","profuse","protective","proud","psychedelic","psychotic","public","puffy","pumped","puny","purple","purring","pushy","puzzled","puzzling","quack","quaint","quarrelsome","questionable","quick","quickest","quiet","quirky","quixotic","quizzical","rabid","racial","ragged","rainy","rambunctious","rampant","rapid","rare","raspy","ratty","ready","real","rebel","receptive","recondite","red","redundant","reflective","regular","relieved","remarkable","reminiscent","repulsive","resolute","resonant","responsible","rhetorical","rich","right","righteous","rightful","rigid","ripe","ritzy","roasted","robust","romantic","roomy","rotten","rough","round","royal","ruddy","rude","rural","rustic","ruthless","sable","sad","safe","salty","same","sassy","satisfying","savory","scandalous","scarce","scared","scary","scattered","scientific","scintillating","scrawny","screeching","second","second-hand","secret","secretive","sedate","seemly","selective","selfish","separate","serious","shaggy","shaky","shallow","sharp","shiny","shivering","shocking","short","shrill","shut","shy","sick","silent","silent","silky","silly","simple","simplistic","sincere","six","skillful","skinny","sleepy","slim","slimy","slippery","sloppy","slow","small","smart","smelly","smiling","smoggy","smooth","sneaky","snobbish","snotty","soft","soggy","solid","somber","sophisticated","sordid","sore","sore","sour","sparkling","special","spectacular","spicy","spiffy","spiky","spiritual","spiteful","splendid","spooky","spotless","spotted","spotty","spurious","squalid","square","squealing","squeamish","staking","stale","standing","statuesque","steadfast","steady","steep","stereotyped","sticky","stiff","stimulating","stingy","stormy","straight","strange","striped","strong","stupendous","stupid","sturdy","subdued","subsequent","substantial","successful","succinct","sudden","sulky","super","superb","superficial","supreme","swanky","sweet","sweltering","swift","symptomatic","synonymous","taboo","tacit","tacky","talented","tall","tame","tan","tangible","tangy","tart","tasteful","tasteless","tasty","tawdry","tearful","tedious","teeny","teeny-tiny","telling","temporary","ten","tender tense","tense","tenuous","terrible","terrific","tested","testy","thankful","therapeutic","thick","thin","thinkable","third","thirsty","thoughtful","thoughtless","threatening","three","thundering","tidy","tight","tightfisted","tiny","tired","tiresome","toothsome","torpid","tough","towering","tranquil","trashy","tremendous","tricky","trite","troubled","truculent","true","truthful","two","typical","ubiquitous","ugliest","ugly","ultra","unable","unaccountable","unadvised","unarmed","unbecoming","unbiased","uncovered","understood","undesirable","unequal","unequaled","uneven","unhealthy","uninterested","unique","unkempt","unknown","unnatural","unruly","unsightly","unsuitable","untidy","unused","unusual","unwieldy","unwritten","upbeat","uppity","upset","uptight","used","useful","useless","utopian","utter","uttermost","vacuous","vagabond","vague","valuable","various","vast","vengeful","venomous","verdant","versed","victorious","vigorous","violent","violet","vivacious","voiceless","volatile","voracious","vulgar","wacky","waggish","waiting","","wakeful","wandering","wanting","warlike","warm","wary","wasteful","watery","weak","wealthy","weary","well-groomed","well-made","well-off","well-to-do","wet","whimsical","whispering","white","whole","wholesale","wicked","wide","wide-eyed","wiggly","wild","willing","windy","wiry","wise","wistful","witty","woebegone","womanly","wonderful","wooden","woozy","workable","worried","worthless","wrathful","wretched","wrong","wry","xenophobic","yellow","yielding","young","youthful","yummy","zany","zealous","zesty","zippy","zonked"];

function topicMaker() {
  for (x = 0; x < 5; x++) {
    var randomizer = Math.floor(Math.random() * arrayOfwords.length);
    buttonsTopic.push(arrayOfwords[randomizer]);
  }

}


$(document).ready(function () {

  

  topicMaker();

  function showButtons() {

    divider++;
    $("#addButtons").empty();
    for (var i = 0; i < buttonsTopic.length; i++) {
      // created method to color the button differently 
      if (divider % 5 == 0) {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-danger");
        button.attr("data-name", buttonsTopic[i]);
        button.text(buttonsTopic[i]);
        $("#addButtons").append(button);
        // q(divider);
      }

      else if (divider % 4 == 0) {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-primary");
        button.attr("data-name", buttonsTopic[i]);
        button.text(buttonsTopic[i]);
        $("#addButtons").append(button);

      }
      else if (divider % 3 == 0) {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-secondary");
        button.attr("data-name", buttonsTopic[i]);
        button.text(buttonsTopic[i]);
        $("#addButtons").append(button);

      }
      else if (divider % 2 == 0) {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-warning");
        button.attr("data-name", buttonsTopic[i]);
        button.text(buttonsTopic[i]);
        $("#addButtons").append(button);

      }
      else if (divider % 1 == 0) {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-success");
        button.attr("data-name", buttonsTopic[i]);
        button.text(buttonsTopic[i]);
        $("#addButtons").append(button);
      }
      else {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-dark");
        button.attr("data-name", buttonsTopic[i]);
        button.text(buttonsTopic[i]);
        $("#addButtons").append(button);


      }
      // console.log(divider);
      divider++
    }
  }

  $(document).on("click", ".buttonMaker", searchGifs);




  $("#searchButton").on("click", function (event) {
    event.preventDefault();
    searchResult = $("#searchInput").val().trim();
    if (searchResult != "") {
      buttonsTopic.push(searchResult);
      event.preventDefault();
      searchGifs(searchResult);
      showButtons();
    }

    // added this else statement so that it wont generate any blank buttons , 
    else { alert("pick a topic please") }
    showButtons();
  });

  //onclick event for when the user clicks a button
  function searchGifs() {
    var searchImage = $(this).attr("data-name");
    if (searchImage === undefined) {
      searchImage = searchResult;
    }

    var topic = searchImage;
    // console.log(topic)
    // console.log("function SearchGif proc")
    var offset = Math.floor(Math.random() * 999);
    // console.log(offset)

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchImage + "&api_key=" + apiKey + "&limit=10&offset=" + offset + "&random";

    //ajax
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      var results = response.data;
      console.log(results)
      for (var i = 0; i < results.length; i++) {
        var x = i + 1;
        var resultDiv = $("<div class='flex-column result'>");
        var pTag = $("<p class='d-flex p-2 desc' >").text("Rating: " + results[i].rating);
        var topicTag = $("<p class='d-flex p-2 desc1' >").text("Topic: " + topic);
        var download = $('<a>').text("DOWNLOAD");

        var mainURL = response.data[i].images.original.url;
        var parsedDL = "https://i.giphy.com" + mainURL.slice(24);
        var imgURL = response.data[i].images.fixed_width_still.url;
        var imgURLStill = response.data[i].images.fixed_width_still.url;
        var imgURLAnimate = response.data[i].images.fixed_width_downsampled.url;
        var newGif = $("<img>").attr("src", imgURL).attr("data-still", imgURLStill).attr("data-animate", imgURLAnimate).attr("data-state", "still");
        newGif.addClass("giffy");
        download.addClass("btn btn-outline-dark");
        download.attr("download", "FILE_NAME.jpg");
        download.attr("href", parsedDL);
        download.attr("target", "_blank");



        $("#gifImage").append(newGif);
        resultDiv.append(newGif);
        resultDiv.append(pTag);
        resultDiv.append(topicTag);
        resultDiv.append(download);
        $("#gifImage").prepend(resultDiv);
      }
    });
  }

  showButtons();



  $(document).on("click", ".giffy", animateGif);



  function animateGif() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // console.log(state)
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  };
  function noBG() {
    $(".navbar").css("background", "black");
    $(".navbar-brand.mb-0.h1").css("color", "black");
    $(".jumbotron").css("background", "black");
    $("body").css("background", "black");
    $(".btn.btn-info.btn-lg.search").css("background", "black");
    $("#clearButton").css("background", "black");
  }

  function reBG() {

    $(".navbar").css("color", "midnightblue");
    $(".navbar").css("background-image", "url('assets/images/nav.gif')");

    $(".navbar-brand.mb-0.h1").css("color", "white");


    $(".jumbotron").css("background-image", "url('assets/images/bodybg.gif')");
    $(".jumbotron").css("background-position", "center");
    $(".jumbotron").css("background-repeat", "no-repeat");
    $(".jumbotron").css("background-size", "cover");

    $("body").css("background-image", "url('assets/images/bgbod.gif')");

    $(".btn.btn-info.btn-lg.search").css("background-image", "url('assets/images/buttonbg.gif')");

    $("#clearButton").css("background-image", "url('assets/images/clearhover.gif')");
  }


  var togler = false;

  // TOGGLE FUNCTION 
  $("#toggler").click(function () {
    console.log("clicking")
    if (togler === true) {
      reBG();
      togler = false;
      console.log("togler NO BG")
    }
    else {
      noBG();
      console.log("togler REBG")
      togler = true;
    }
  });

  $("#clearButton").click(function () {
    $("#gifImage").empty();

  });

  $("#clearTopic").click(function () {
    buttonsTopic = ["funny", "emotional", "fantastic", "great", "amusing"];
    showButtons();
  });

  $("#moreButton").click(function () {
   topicMaker();
   showButtons();

  });




});
