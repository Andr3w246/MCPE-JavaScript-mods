﻿/*PE Computers Mod*/
/*By: Andr3w246*/
/*OS(ver): MC_0A1*/
/*Copyright Andr3w246, 2015*/
/*The "coding" isn't a real coding language, it is a made up one.*/

//Variables
var compOn= false
var menuPos= -1
var exitMess= "Goodbye!"
var Version= "MC_0A1"

//Special Functions
function Settings(){
clientMessage(" ");
clientMessage("§5Settings");
clientMessage("§7You cannot use level 0 commands in here");
clientMessage("§a'/Setings ExitMess': "+" §6Edit Exit Message");
clientMessage("§a'/Settings Leave': "+"§6Leave Settings Menu");
menuPos= 1
}
function Menu(){
clientMessage(" ");
clientMessage("§5Menu directory");
clientMessage("§a/off: "+"§6Turn the computer off");
clientMessage("§a/app: "+"§6See all avalable applications");
clientMessage("§a/app <appName>: "+"§6Launch application");
}
function LeaveEditor(){
clientMessage("§aQuiting Editor...");
clientMessage("§9You can use level 1 commands again");
Settings();
}
function apps(){
clientMessage(" ");
clientMessage("§5Avalable applications:");
clientMessage("§aWebMiner: "+"§6Internet explore-like program");
clientMessage("§aSettings: "+"§6User settings for computer");
}

//Computer Blocks
Block.defineBlock(23, "Tower", [["piston_bottom", 0], ["piston_inner", 0], ["brewing_stand_base", 0], ["brewing_stand_base", 0], ["brewing_stand_base", 0], ["brewing_stand_base", 0]], 0, false, 0);
Block.setDestroyTime(23, 2.5);
Block.setExplosionResistance(23, 5);
Block.setShape(23, 0.25, 0, 0, 0.75, 1, 1);
Block.defineBlock(25, "Computer Screen", [["redstone_block", 0], ["furnace", 3], ["cauldron_top", 0], ["furnace", 2], ["furnace", 2], ["furnace", 2]], 1, true, 0);
Block.setDestroyTime(25, 2.5);
Block.setExplosionResistance(25, 5);
Block.defineBlock(28, "Keyboard", [["furnace", 3], ["command_block", 0], ["furnace", 3], ["furnace", 3], ["furnace", 3], ["furnace", 3]], 0, false, 0);
Block.setDestroyTime(28, 2.5);
Block.setExplosionResistance(28, 5);
Block.setShape(28, 0, 0, 0, 1, 1.5/16, 1);
Block.defineBlock(29, "internet Port", [["iron_block", 0], ["iron_block", 0], ["iron_block", 0], ["iron_block", 0], ["redstone_lamp_off", 0], ["redstone_block", 0]], 0, false, 0);
Block.setDestroyTime(29,2.5);
Block.setExplosionResistance(29, 5);
Block.setShape(29, 0.75, 0.25, 0.25, 1, 0.75, 0.75);

//Crafting recipies
Item.addShapedRecipe(25, 1, 0, ["crc","cgc","ccc"], ["c", 4, 0, "g", 20, 0, "r", 331, 0]);
Item.addShapedRecipe(23, 1, 0, ["iri","rrr","iii"], ["i", 265, 0, "r", 331, 0]);
Item.addShapedRecipe(28, 1, 0, ["000","wsc","rrr"], ["w", 158, 0, "s", 44, 0, "c", 44, 3, "r", 331, 0]);
Item.addShapedRecipe(29, 1, 0, ["grg","rgG","GGG"], ["g", 266, 0, "r", 331, 0, "G", 20, 0]);

//Turn on the computer
function useItem(x, y, z, itemId, blockId, side){
var block= Player.getPointedBlockId()
var b2= Level.getTile(x, y, z+1);
var b3= Level.getTile(x+1, y, z+1);
var b4= Level.getTile(x-1, y, z+1);
if(block==28&&b2==25&&b3==23&&b4==29){
ModPE.showTipMessage("Computer started. Use '/start' to use");
compOn= true
}
}

//Use the computer
function procCmd(command){
var cmd = command.split(" ");
if(cmd[0]=="start"&&compOn==false){
clientMessage("Your computer isn't on!");
}
else if(cmd[0]=="start"&&compOn==true&&menuPos==-1){
clientMessage("§aWelcome to the MCOS computer");
clientMessage("§aBy: Andr3w246 inc.");
clientMessage("§aCurrent OS Version: "+ChatColor.YELLOW+Version);
clientMessage("§aHave fun, and type '/menu'!");
menuPos= 0
}
//Menu command
if(cmd[0]=="menu"&&compOn==true&&menuPos==0){
Menu();
}
if(cmd[0]=="off"&&compOn==true&&menuPos>=0){
clientMessage(" ");
clientMessage("§3Computer has turned off");
clientMessage("§3All systems are off");
clientMessage(exitMess);
compOn= false
menuPos= -1
}
if(cmd[0]=="app"&&compOn==true&&menuPos==0){
apps();
}
if(cmd[0]=="app"&&cmd[1]=="WebMiner"&&compOn==true&&menuPos==0){
clientMessage(" ");
clientMessage("§9This application is not complete");
clientMessage("§9Please try again next update!");
apps();
}
if(cmd[0]=="app"&&cmd[1]=="Settings"&&compOn==true&&menuPos==0){
Settings();
}
if(cmd[0]=="Settings"&&cmd[1]=="ExitMess"&&compOn==true&&menuPos==1){
clientMessage(" ");
clientMessage("§7You cannot use level 0,1 commands in here");
clientMessage("§aEditing 'ExitMess.txt'");
clientMessage("§5Type '/Edit Quit' to exit without changing text");
clientMessage("§5Type'/SetText <your text>'to set text and exit");
clientMessage("§5text can only be 1 word, no spaces!");
menuPos= 2
}
if(cmd[0]=="SetText"&&compOn==true&&menuPos==2){
clientMessage("§5'ExitMess.txt' set to: ");
clientMessage(cmd[1]);
LeaveEditor();
exitMess= cmd[1]
}
if(cmd[0]=="Edit"&&cmd[1]=="Quit"&&compOn==true&&menuPos==2){
LeaveEditor();
}
if(cmd[0]=="Settings"&&cmd[1]=="Leave"&&compOn==true&&menuPos==1){
clientMessage(" ");
clientMessage("§aExit Settings application");
clientMessage("§9You can use Level 0 Commands again"); 
menuPos= 0
Menu();
}
}

//Leaving world
function leaveGame(){
menuPos= -1
compOn= false
print("Computer auto shut-off. All data has been saved.");
print("Computer auto shut-off. All data has been saved.");
}
