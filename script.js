let update1Body = "A whole new snow-covered battleground awaits! \nBut beware, when a blizzard rolls in,\nyour sight and hearing are severely compromised. \nAdapt, survive, and dominate the unknown."
let update1Head = "DYNAMIC SNOW WEATHER"
let update1Video = "videos/SNOW_1.mp4"


let update2Body = "Your every step will leave tracks in the snow—use \nthem to hunt down your enemies and outmaneuver your foes. \n\n\n"
let update2Head = "TRACK ENEMIES BY THEIR FOOTPRINTS"
let update2Video = "videos/TRACK_1.mp4"

let update3Body = "For the first time ever, step into the shoes of a Boss.\nCommand the battlefield with overwhelming power \nand lead your side to victory. \n\n"
let update3Head = "BOSS FIGHT: PLAY AS VIPER OR FRED"
let update3Video = "videos/BOSS_1.mp4"

let update4Body = "Airdrops just got an upgrade. Every drop in \nthe limited-time mode guarantees\na high-value red item. The fight for supremacy \nbegins here—are you ready to claim it?"
let update4Head = "100% RED LOOT IN AIRDROPS"
let update4Video = "videos/RED_1.mp4"


let about1Body = "Load up your rucksack with supplies and ammo, or travel empty for maximum mobility. \nLight or heavy, it's all up to you."
let about1Head = "GEAR UP"
let about1Video = "videos/GEARUP_2.mp4"


let about2Body ="Eliminate adversaries head-on, with stealth, or bypass the bullets altogether. \nYou have the freedom to fight however you desire.\nScour the lawless arena in search of valuable guns, attachments and supplies."
let about2Head ="SHOOT & LOOT"
let about2Video = "videos/SHOOT_2.mp4"

let about3Body ="Break out of the combat area alive for a chance to strike it rich, \nbut be prepared to fight for survival."
let about3Head ="BREAKOUT"
let about3Video = "videos/BREAKOUT_2.mp4"

let about4Body ="Trade with other players via an open market system to own the ultimate raid loadout."
let about4Head ="TRADE"
let about4Video = "videos/TRADE_2.mp4"


const mapbg = ["videos/farmlandbg.mp4","videos/northbg.mp4","videos/armory.bg.mp4","videos/valleybg.mp4","videos/tvbg.mp4"]


/*Used for Home Page*/

function bg_change(head, body, videoPath) {
    document.getElementById("log1").innerHTML = head;
    document.getElementById("log1.1").innerHTML = body;
    document.getElementById("updatevid").src = videoPath; /*update video path and reload*/
    document.getElementById("bg_video").load();
}
function about(head, body, videoPath) {
    document.getElementById("about1").innerHTML = head;
    document.getElementById("about1.1").innerHTML = body;
    document.getElementById("aboutvid").src = videoPath; /*update video path and reload*/
    document.getElementById("ab_video").load()
}

function map(videoPath){

    document.getElementById("mapvid").src = videoPath; /*update video path and reload*/
    document.getElementById("map_video").load()

}


function guidehightlight1(){
    var gu1 =document.getElementById("g1")

    var gu2 =document.getElementById("g2")

    gu1.style.color = "#FFA600";
    gu2.style.color = "#ffffff";
}

function guidehightlight2(){

    var gu1 =document.getElementById("g1")
    var gu2 =document.getElementById("g2")

    gu1.style.color = "#ffffff";
    gu2.style.color = "#FFA600";

}