let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.getElementById("msg");
let uscore=document.querySelector("#user-score");
let cscore=document.querySelector("#computer-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
}
);

const playgame=(userchoice)=>{
    console.log("you choose ",userchoice );
    //print computer choice
    const compchoice=compuchoice();
    console.log("computer choose",compchoice);
    if(userchoice===compchoice)
    {
        drawgame();
    }
    else{
    let  userwin=true;
    if(userchoice==="rock")
       {
       userwin= compchoice==="paper"? false:true;
       }
       else if(userchoice==="paper")
       {
        userwin= compchoice==="scissors"? false:true;
       }
       else
       {
        userwin=compchoice==="rock"? false:true;
       }
       showwinner(userwin);
    }
    
};
const compuchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];    
};

const drawgame=()=>{
    console.log("game is draw");
    msg.innerHTML="Nice try, Game is draw";
};
const showwinner=(userwin)=>{
    if(userwin)
    {
        // console.log("you won!");
        msg.innerHTML="hurray! you won";
        userscore++;
        uscore.innerHTML=userscore;
    }
    else{
        // console.log("you lost");
        msg.innerHTML="Oops! you Lost";
        compscore++;
        cscore.innerHTML=compscore;
    }

};