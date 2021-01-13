window.addEventListener("load", init)







// available Levels

const Levels ={
    easy:5,
    medium:5,
    hard:5,
};

// to change level
let currentLevel = Levels.easy; 

// Globals

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const message = document.querySelector("#message")
const seconds = document.querySelector("#seconds")
const showLevel = document.querySelector('#level')

const words =[
    'cat','rat','generate','lucky','book','program','developer','establishment','joke','screen','laptop','runaway','hero','keyboard','desktop','button','statue','beater','instructions','document','switch','pokemon','player','ground','charge','classic','sugar','salt',"wait","release","river","important","mark","electric","defective","poke","blue","beef","spring","hurt","orange",
    "happy","zealous","flowery","accurate","brake","title","xray","festive","wrathful",'scissors','peaceful','finicky','shape','soothe','head','spotted','needless','time','abundant','humdrum','mouth','trot','bounce','thank','avoid','shocking','minor','secret','rabbit','protect','honey','business','worthless','suggest','splendid','drab','safe','gigantic','arrive','drum','hate','dinosaurs','machine','tame','annoy','telephone','curtain','monkey','things','refuse','lunch','wooden','ruin','request','faded','camp','didactic','annoying','finger','acrid','overt','lamp','paste','rejoice','ignorant','exist','madly','doubt','increase','measly','mate','tangy','dislike','bikes','rambunctious','complete','motion','coast','air','obey','burst'
];


// initialize Game
function init(){
    // show number of seconds in UI
    seconds.innerHTML = currentLevel;

    // load word from array
    showWord(words);

    // start Matching on word input
    wordInput.addEventListener("input", startMatch)

    // call countdown
    setInterval(countdown, 1000);

    // CHeck game Status
    setInterval(checkStatus, 50);

}

function startMatch(){
    if(matchWords()){
        isPlaying =true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = "";
        score++;
        if(score > 10 && score < 20){
            currentLevel = Levels.medium;
        }else if(score > 20){
            currentLevel = Levels.hard;
        }
        
        showLevel.innerHTML = currentLevel;
    }

    if(score == -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    }
        
}


function matchWords(){
    if(wordInput.value.toUpperCase() === currentWord.innerHTML){
        message.innerHTML= 'Correct!!!'
        return true;
    }else  {
        message.innerHTML = "";
        return false;
    }
}

// pick & show random word
function showWord(words){
    // generate random Array Index
    const randIndex = Math.floor(Math.random() * words.length);
    // output random word
    currentWord.innerHTML = words[randIndex].toUpperCase();
     
}

function countdown(){

    if(time > 0){
        // decremrnt time
        time--;
    }else if(time === 0){
        // game over
        isPlaying = false
    }

    // Show time
    timeDisplay.innerHTML = time;

}


// check game status

function checkStatus(){
    if(!isPlaying && time === 0){
      message.innerHTML = 'Game Over!!!';
      score = -1;
      currentLevel = Levels.easy;
    }
}



// nosy
// consist
// yellow
// long
// cakes
// "close"
// teaching
// five
// undesirable
// squash
// border
// memorize
// fowl
// scarecrow
// tie
// present
// well-to-do
// meaty
// wonderful
// pencil
// need
// advice
// wide-eyed
// apologize
// possible
// dreary
// skin
// kick
// stage
// tongue
// puffy
// camp
// ski
// ghost
// quickest
// lip
// frequent
// one
// efficient
// angry
// alleged
// suit
// notebook
// wipe
// dream
// spark
// work
// pail
// throne
// unnatural
// pale
// brief
// pets
// ad hoc
// overrated
// house
// rely
// messy
// pastoral
// afternoon
// enchanting
// tense
// army
// spotless
// button
// good
// reduce
// leather
// eye
// spotty
// growth
// alert
// statement
// overflow
// flame
// disagree
// whispering
// lively
// healthy
// sedate
// plant
// melt
// snatch
// combative
// grain
// spurious
// 'run'
// 'fuzzy'
// hot
// 'large'
// 'exotic'
// woozy
// 'unaccountable'
// zip
// wren
// 'courageous'
// 'match'
// 'form'
// comb
// 'shut'
// 'pointless'
// 'languid'
// 'capricious'
// 'stop'
// mammoth
// psychedelic
// ordinary
// cobweb
// determined
// stereotyped
// sordid
// arrest
// inquisitive
// carpenter
// small
// vivacious
// guard
// poor
// funny
// shaky
// hilarious
// egg
// spiders
// abounding
// humor
// sticky
// plastic
// ratty
// productive
// agree
// fork
// temper
// prepare
// whistle
// responsible
// drain
// eight
// nest
// slow
// loutish
// saw
// fear
// scrub
// volatile
// moldy
// attract
// receptive
// aberrant
// neck
// man
// store
// materialistic
// shrug
// billowy
// driving
// travel
// fairies
// lumpy
// assorted
// bow
// babies
// attend
// dress
// surprise
// tranquil
// marvelous
// illustrious
// clam
// fact
// plate
// soft
// cover
// dad
// trousers
// cars
// superficial
// bawdy
// drown
// envious
// wasteful
// religion
// bells
// kick
// announce
// elastic
// trap
// smoggy
// lively
// serious
// start
// lavish
// basin
// wrench
// lock
// picture
// hand
// rail
// delightful
// trade
// sand
// face
// tenuous
// scream
// produce
// low
// subtract
// industrious
// pass
// station
// wash
// synonymous
// red
// wrong
// warlike
// low
// contain
// mailbox
// liquid
// expensive
// string
// time
// admit
// lettuce
// decision
// quixotic
// towering
// copy
// better
// cake
// fluffy
// yarn
// grease
// mountainous
// stick
// join
// icicle
// succinct
// plastic
// pear
// acoustic
// abrupt
// position
// spark
// yak
// bent
// crook
// kitty
// sneaky
// use
// pollution
// mundane
// barbarous
// delight
// flesh
// robin
// party
// milky
// round
// wretched
// pleasant
// treatment
// winter
// hot
// available
// train
// writer
// prose
// furtive
// building
// cattle
// wealthy
// sassy
// sponge
// face
// reflective
// bear
// wanting
// bustling
// wiry
// tearful
// hypnotic
// ill
// animated
// verdant
// toad
// unlock
// long-term
// wall
// direful
// hunt
// obtainable
// walk
// bleach
// unarmed
// happen
// kiss
// trick
// queen
// conscious
// mourn
// girls
// frame
// erect
// secretary
// field
// helpful
// science
// crown
// heady
// grotesque
// dress
// degree
// cushion
// piquant
// innate
// square
// cactus
// tricky
// company
// remarkable
// calculate
// rinse
// crime
// push
// mind
// flagrant
// man
// permit
// theory
// thoughtful
// crate
// yummy
// offbeat
// paltry
// bulb
// optimal
// stove
// chemical
// shallow
// merciful
// sore
// abortive
// perpetual
// zonked
// eyes
// bore
// tired
// regret
// fit
// potato
// confuse
// childlike
// vein
// sound
// attack
// exchange
// back
// check
// damaged
// grandmother
// division
// groovy
// throat
// office
// pin
// stare
// meddle
// shivering
// interfere
// occur
// hole
// sugar
// test
// blind
// free
// perform
// cherries
// flavor
// stupendous
// purpose
// extend
// risk
// fanatical
// grubby
// beg
// romantic
// outrageous
// swift
// bath
// room
// pocket
// front
// flower
// quicksand
// mark
// sturdy
// resolute
// letters
// expert
// hapless
// bloody
// blue-eyed
// hope
// chew