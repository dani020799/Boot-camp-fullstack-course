
const StringFormatters = function () {
     const  capitalizeFirst = function (s)
     {
        return s.charAt(0).toUpperCase() + s.slice(1);
     };
     const toSkewerCase = function (s) 
     {
    return (s || "").trim().replace(/\s+/g, "-");
      };
    return {
        capitalizeFirst:capitalizeFirst ,
        toSkewerCase :toSkewerCase
    };
};

const Bank =function (){
   let money = 500;
   const deposit=function (amount) {
      money+=amount;
   }
   const showBalance = function () {
    console.log(money);
   }
   return {deposit:deposit,showBalance:showBalance};
};


const SongManager= function ()
{
    const songs ={};
    const addSong= function (name,fullUrl){
        const id= fullUrl.split("v=")[1];
        songs[name]=id;
    };
    const getSong= function (name) {
        return "https://www.youtube.com/watch?v=" + songs[name];
    };

    return {addSong: addSong , getSong: getSong};
};

function EX3()
{
    const songsManager = SongManager()
     songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
      songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
     songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

    console.log(songsManager.getSong("sax")) // should print https://www.youtube.com/watch?v=3JZ4pnNt yxQ
}
function EX2 ()
{
    const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950
}

function EX1()
{
    const formatter = StringFormatters();
    console.log(formatter.capitalizeFirst("dorothy") )//should return Dorothy
     console.log(formatter.toSkewerCase("blue box")) //should return blue-box

}


function main()
{
   console.log("EX1 resuls: \n");
   EX1();
   console.log("\nEX2 resuls: \n");
   EX2();
    console.log("\nEX3 resuls: \n");
   EX3();
}


main();