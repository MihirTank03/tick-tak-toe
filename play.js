let btn=document.querySelectorAll(".box");
let ref=document.querySelector("#ref");
ref.style.cssText="display: none;";
let gm=document.querySelector(".game");
let turnO=true;
let turnX=false;
let winner=document.querySelector("#res");
let winMatrix=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const f1=(bx)=>{
    // console.log(bx);
    
    if(turnO){
        // console.log(bx);
        bx.innerText="O";
        turnO=false;
        bx.setAttribute('disabled',true);
        
    }
    else{
        bx.innerText="X";
        turnO=true;
        bx.setAttribute('disabled',true);
    }
    chkWin();
   
};

btn.forEach((bx)=>{
    bx.addEventListener("click",()=>{
        f1(bx);
    });
});

const chkWin=()=>{
    for (let ptn of winMatrix) {
        let vel=0;
        let y=turnO?'X':'O';
        for(let tmp of ptn){
            if(btn[tmp].innerHTML==y){
                
              vel++;

            }  
        }
        
        if(vel==3){
            console.log("win ",y);
            winner.innerText=`WON ${y}`;
            
            gm.style.cssText="display: none;";
            ref.style.cssText="display: flex;";

        }

    }
}
ref.addEventListener("click",()=>{
    location.reload();
});

const f2()=>{
    let k=0;
    for(let ok of btn){
        if(ok.innerText=='X' || ok.innerText=='O'){
            
        }
    }
}