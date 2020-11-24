$(document).ready(function(){
    var a = [

        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1],
        [2,2,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],
        [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],
        [2,1,2,1,2,2,2,1,2,1,2,1,2,1,2,1,2],
        [2,1,2,1,1,1,1,1,2,1,2,1,1,1,2,1,2],
        [2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2],
        [2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2],
        [2,1,2,1,2,1,1,1,1,1,1,1,2,1,1,1,2],
        [2,1,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2],
        [2,1,2,1,2,1,1,1,1,1,1,1,2,1,1,1,2],
        [2,1,2,1,2,1,2,2,2,2,2,1,2,2,2,1,2],
        [2,1,1,1,2,1,2,1,1,1,2,1,2,1,1,1,2],
        [2,2,2,1,2,1,2,1,2,1,2,1,2,1,2,2,2],
        [2,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        
    ];


var b = [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [1,1,2,1,1,1,2,1,2,1,2,1,1,1,1,1,1],
        [2,1,2,1,2,1,2,1,2,1,2,1,2,2,2,2,2],
        [2,1,2,1,2,1,2,1,2,1,2,1,1,1,1,1,2],
        [2,1,2,1,2,1,2,1,2,1,2,2,2,2,2,1,2],
        [2,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,2],
        [2,1,2,2,2,2,2,1,2,1,2,1,2,2,2,1,2],
        [2,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,2],
        [2,1,2,1,2,2,2,2,2,2,2,2,2,1,2,1,2],
        [2,1,2,1,2,1,1,1,1,1,1,1,2,1,2,1,2],
        [2,1,2,1,2,2,2,1,2,2,2,1,2,1,2,1,2],
        [2,1,2,1,1,1,2,1,1,1,1,1,2,1,2,1,2],
        [2,1,2,1,2,2,2,1,2,2,2,1,2,1,2,1,2],
        [2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,1,2],
        [2,2,2,1,2,2,2,2,2,2,2,2,2,1,2,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    ];
var c = [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1],
        [2,2,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2],
        [2,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,2],
        [2,1,2,2,2,1,2,1,2,1,2,2,2,1,2,1,2],
        [2,1,1,1,2,1,2,1,2,1,2,1,1,1,2,1,2],
        [2,2,2,2,2,1,2,1,2,1,2,2,2,2,2,1,2],
        [2,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2],
        [2,1,2,2,2,2,2,2,2,2,2,2,2,1,2,1,2],
        [2,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2],
        [2,1,2,1,2,1,2,2,2,2,2,2,2,2,2,1,2],
        [2,1,1,1,2,1,2,1,1,1,1,1,1,1,2,1,2],
        [2,1,2,1,2,1,2,2,2,2,2,2,2,1,2,1,2],
        [2,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2],
        [2,1,2,2,2,2,2,2,2,2,2,2,2,1,2,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        
    ];
var d = [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [1,1,2,1,1,1,2,1,2,1,1,1,1,1,1,1,1],
        [2,1,2,1,2,1,2,1,2,1,2,2,2,2,2,1,2],
        [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],
        [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],
        [2,1,1,1,2,1,2,1,2,1,2,1,2,1,1,1,2],
        [2,2,2,2,2,1,2,1,2,1,2,1,2,2,2,2,2],
        [2,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,2],
        [2,1,2,1,2,2,2,2,2,2,2,2,2,1,2,1,2],
        [2,1,2,1,1,1,1,1,2,1,1,1,2,1,2,1,2],
        [2,1,2,2,2,2,2,1,2,2,2,1,2,2,2,1,2],
        [2,1,1,1,1,1,2,1,1,1,2,1,2,1,1,1,2],
        [2,1,2,1,2,2,2,1,2,2,2,1,2,2,2,1,2],
        [2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,1,2],
        [2,1,2,2,2,2,2,2,2,2,2,2,2,1,2,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        
    ];

    function conCatX(x,y){
        var maze1 = x.length
        var maze2 = y[0].length;
        for(var i = 0; i<maze1; i++){
            for (var j=1;j<maze2; j++){
               x[i].push(y[i][j]); 
            };
        };
        return x;   
    };
    
    function conCatY(x,y){
        x.pop();
        var con = x.concat(y);
        return con;
    };
    function buildQuad(n,s,e,w){  
    // This function creates random portals in the maze that will link to other pages.
    // Symbolizes ads and/or other distractions we view on the internet
    //getting carried away
    var d1 = Math.floor(Math.random()*16) +1;
    var d2 = Math.floor(Math.random()*16) +1;
    var d3 = Math.floor(Math.random()*16) +1;
    var d4 = Math.floor(Math.random()*16) +1;
    var d5 = Math.floor(Math.random()*16) +1;
    var d6 = Math.floor(Math.random()*16) +1;
    var d7 = Math.floor(Math.random()*16) +1;
    var d8 = Math.floor(Math.random()*16) +1;

    if(w[d1][d2] ==1){
        w[d1][d2] = 3;
    };
    if(w[d7][d3] == 1){
        w[d7][d3] = 3;
    };
    if(n[d3][d4] == 1){
        n[d3][d4] = 3;
    };
    if(n[d1][d8] ==1){
        n[d1][d8] = 3;
    };
    if(e[d5][d6] ==1){
        e[d5][d6] = 3;
    };
    if(e[d2][d4] ==1){
        e[d2][d4] = 3;
    };
    if(s[d7][d8] ==1){
        s[d7][d8] = 3;
    };
    if(s[d3][d6] ==1){
        s[d3][d6] = 3;
    };
    
// After the portals are established the mazes are united as one.
    var top = conCatX(n,s);
    z = top.length*2 -2;
    k = top.length-1;
    top[1][z] = 2;
    top[1][0] = 0;
    top[1][k] = 4;
    var bottom = conCatX(e,w);
    q = bottom.length*2-2;
    w = bottom.length-1;
  
    bottom[1][0] = 9;
    bottom[0][q-1] = 5;
    bottom[1][q] = 2;
    bottom[1][w] = 6;
    var quad = conCatY(top,bottom);
    return quad;
    };

    var maze = buildQuad(c,d,b,a);
    //this is the maze it will be an array

    function displayMaze(){
        var output= '';

        //then we create a for loop to start displaying each element inside the rows

        for(var i=0; i < maze.length; i++){
            output += "\n <div class='row'> \n";

            // then we need another loop

            for(var j=0; j< maze[i].length; j++){

                //we need some mf conditionals !!!

                if(maze[i][j] == 2){
                    output+= `<div class='brick'></div>`
                }
                else if(maze[i][j]==1){
                    output+= "<div class='coin'></div>"
                };
                if(maze[i][j]==0){
                    output+= "<div class='empty'></div>"
                };
                
                if(maze[i][j]==3){
                    output+= "<div class='question'></div>"
                };
                if(maze[i][j]==4){
                    output+= "<div class='level'></div>"
                };
                if(maze[i][j]==5){
                    output+= "<div class='level'></div>"
                };
                if(maze[i][j]==6){
                    output+= "<div class='level'></div>"
                };
                
                if(maze[i][j]==9){
                    output+= "<div class='gold'></div>"
                };

            };
            output += "\n </div>"
            //dont forget the closing tag!
            
        };
    $('#maze-world').html(output);
    };

    displayMaze();
    

var score= 0;

//Because this is inspired by pacman special thanks to Michael Choi for helping me to understand javascript!
var pacman = {
    x:0,
    y:1
};
function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*15+"px";
    document.getElementById('pacman').style.left = pacman.x*15+"px";
}
function displayScore(){
    document.getElementById('score').innerHTML = "Moves: " + score;
}

displayPacman();

 document.onkeydown = function(e){
    // e.preventDefault();
     if(e.keyCode == 37 && maze[pacman.y][pacman.x-1]!== 2 && pacman.x !== 0) {
        pacman.x -- ;
        document.getElementById('pacman').style.transform = "rotateY(-180deg)";
        displayPacman();
    }
    else if(e.keyCode == 39 && maze[pacman.y][pacman.x+1]!== 2){
        pacman.x ++ ;
        document.getElementById('pacman').style.transform = "rotateY(0deg)";
        displayPacman();
    }
    else if(e.keyCode == 38 && maze[pacman.y-1][pacman.x]!== 2){
        pacman.y -- ;
        document.getElementById('pacman').style.transform = "rotateZ(-90deg)";
        displayPacman();
    }
    else if(e.keyCode == 40 && maze[pacman.y+1][pacman.x]!== 2){
        pacman.y ++ ;
        document.getElementById('pacman').style.transform = "rotateZ(90deg)";
        displayPacman();
    };
    
    if(maze[pacman.y][pacman.x]==1){
        maze[pacman.y][pacman.x]=0;        

        score += 1;
        displayMaze();
        displayScore();
    };
   
    // if(maze[pacman.y][pacman.x]==3){
    //     maze[pacman.y+1][pacman.x]=2;
    //     maze[pacman.y-1][pacman.x]=2;
    //     maze[pacman.y][pacman.x+1]=2;
    //     maze[pacman.y][pacman.x-1]=2;
    //     score+=100;
    //     $('.flash').css('display','flex');
    //     $('.question').css('background-color','rgb(255, 95, 77)');
    //     $('.empty').addClass('brandon');
    //     $('.brick').css('opacity','0%');
    //     $('.coin').css('opacity','0%');
    // }else{
    //     $('.flash').css('display','none');
    //     $('.question').css('background-color','rgb(140, 140, 140)');
    //     // $('body').removeClass('brandon');
    //     $('.brick').css('opacity','100%');
    //     $('.coin').css('opacity','100%');
    // };
    if(maze[pacman.y][pacman.x]==2){
        
        displayPacman();
    }
    if(maze[pacman.y][pacman.x]==4){
        maze[pacman.y][pacman.x+1]=2;
        maze[pacman.y][pacman.x-1]=2;
    $('.first').css('display','flex');
    console.log('firstlevel');
    displayPacman();
 };
 if(maze[pacman.y][pacman.x]==5){
    maze[pacman.y+1][pacman.x]=2;
    maze[pacman.y-1][pacman.x]=2;
    $('.second').css('display','flex');
    displayPacman();
 };
 if(maze[pacman.y][pacman.x]==6){
    maze[pacman.y][pacman.x+1]=2;
    maze[pacman.y][pacman.x-1]=2;
    $('.third').css('display','flex');
    displayPacman();
 };
 if(maze[pacman.y][pacman.x]==9){
    maze[pacman.y][pacman.x+1]=2;
    maze[pacman.y][pacman.x-1]=2;
    $('.flash').css('display','flex');
    $('.empty').addClass('brandon');
    $('.brick').css('opacity','0%');
    $('.coin').css('opacity','0%');



    displayPacman();
 }; //  displayPacman();
 }



//questions questions questions
$('#first-level').click(function(){
    maze[pacman.y][pacman.x]=2;
    maze[pacman.y][pacman.x+1]=0;
    
    let dname= $('#gen-name').val();
    let dmonth= $('#gen-month').val();
    let ddate= $('#dating').val();
    let dyear= $('#yearing').val();

    $('#con-name').val(dname);
    $('#con-month').val(dmonth);
    $('#con-date').val(ddate);
    $('#con-year').val(dyear);
    $('.first').css('display','none');
    // maze[pacman.y][pacman.x]==2;
    // maze[pacman.y][pacman.x+1]==1;
    // maze[pacman.y][pacman.x]==1;
    displayPacman();

});

$('#second-level').click(function(){
    maze[pacman.y][pacman.x]=2;
    maze[pacman.y+1][pacman.x]=0;

    let dcaster = $('#gen-caster').val();
    let dspell = $('#gen-spell').val();
    let dcolor = $('#gen-color').val();

    $('#con-caster').val(dcaster);
    $('#con-spell').val(dspell);
    $('#con-color').val(dcolor);
    $('.second').css('display','none');
    displayPacman();

});

$('#third-level').click(function(){
    maze[pacman.y][pacman.x]=2;
    maze[pacman.y][pacman.x-1]=0;

    let dasp = $('#gen-asp').val();
    let dchange = $('#gen-change').val();

    $('#con-asp').val(dasp);
    $('#con-change').val(dchange);
    $('.third').css('display','none');
    displayPacman();
});
 $('#top').click(function(){
    if(maze[pacman.y-1][pacman.x]!== 2){
        pacman.y -- ;
        document.getElementById('pacman').style.transform = "rotateX(-90deg)";
        displayPacman();
    };
    if(maze[pacman.y][pacman.x]==1){
        maze[pacman.y][pacman.x]=0;
        
        score+=1;
        displayMaze();
        displayScore();
        displayPacman();

    };
    if(maze[pacman.y][pacman.x]==3){
        maze[pacman.y+1][pacman.x]=2;
        maze[pacman.y-1][pacman.x]=2;
        maze[pacman.y][pacman.x+1]=2;
        maze[pacman.y][pacman.x-1]=2;
        score+=100;
        $('.flash').css('display','flex');
        $('.question').css('background-color','rgb(255, 95, 77)');
        $('.empty').addClass('brandon');
        $('.brick').css('opacity','0%');
        $('.coin').css('opacity','0%');
    }else{
        $('.flash').css('display','none');
        $('.question').css('background-color','rgb(140, 140, 140)');
        // $('body').removeClass('brandon');
        $('.brick').css('opacity','100%');
        $('.coin').css('opacity','100%');
    };
 });
 $('#right').click(function(){
    if(maze[pacman.y][pacman.x+1]!== 2){
        pacman.x ++ ;
        document.getElementById('pacman').style.transform = "rotateY(0deg)";
        displayPacman();
    };
    if(maze[pacman.y][pacman.x]==1){
        maze[pacman.y][pacman.x]=0;
        
        score+=10;
        displayMaze();
        displayScore();
    }
    if(maze[pacman.y][pacman.x]==3){
        maze[pacman.y+1][pacman.x]=2;
        maze[pacman.y-1][pacman.x]=2;
        maze[pacman.y][pacman.x+1]=2;
        maze[pacman.y][pacman.x-1]=2;
        score+=100;
        $('.flash').css('display','block');
        $('.question').css('background-color','rgb(255, 95, 77)');
        $('.empty').addClass('brandon');
        $('.brick').css('opacity','0%');
        $('.coin').css('opacity','0%');
    }else{
        $('.flash').css('display','none');
        $('.question').css('background-color','rgb(140, 140, 140)');
        // $('body').removeClass('brandon');
        $('.brick').css('opacity','100%');
        $('.coin').css('opacity','100%');
    };
 });
$('#bottom').click(function(){
    if(maze[pacman.y+1][pacman.x]!== 2){
        pacman.y ++ ;
        document.getElementById('pacman').style.transform = "rotateZ(90deg)";
        displayPacman();
    };
    if(maze[pacman.y][pacman.x]==1){
        maze[pacman.y][pacman.x]=0;
        
        score+=10;
        displayMaze();
        displayScore();
    }
    if(maze[pacman.y][pacman.x]==3){
        maze[pacman.y+1][pacman.x]=2;
        maze[pacman.y-1][pacman.x]=2;
        maze[pacman.y][pacman.x+1]=2;
        maze[pacman.y][pacman.x-1]=2;
        score+=100;
        $('.flash').css('display','block');
        $('.question').css('background-color','rgb(255, 95, 77)');
        $('.empty').addClass('brandon');
        $('.brick').css('opacity','0%');
        $('.coin').css('opacity','0%');
    }else{
        $('.flash').css('display','none');
        $('.question').css('background-color','rgb(140, 140, 140)');
        // $('body').removeClass('brandon');
        $('.brick').css('opacity','100%');
        $('.coin').css('opacity','100%');
    };
 });

$('#left').click(function(){
    if(maze[pacman.y][pacman.x-1]!== 2 && pacman.x !== 0){
        pacman.x -- ;
        document.getElementById('pacman').style.transform = "rotateY(-180deg)";
        displayPacman();
    };
    if(maze[pacman.y][pacman.x]==1){
        maze[pacman.y][pacman.x]=0;
        
        score+=10;
        displayMaze();
        displayScore();
    }
    if(maze[pacman.y][pacman.x]==3){
        maze[pacman.y+1][pacman.x]=2;
        maze[pacman.y-1][pacman.x]=2;
        maze[pacman.y][pacman.x+1]=2;
        maze[pacman.y][pacman.x-1]=2;
        score+=100;
        $('.flash').css('display','block');
        $('.question').css('background-color','rgb(255, 95, 77)');
        $('.empty').addClass('brandon');
        $('.brick').css('opacity','0%');
        $('.coin').css('opacity','0%');
    }else{
        $('.flash').css('display','none');
        $('.question').css('background-color','rgb(140, 140, 140)');
        // $('body').removeClass('brandon');
        $('.brick').css('opacity','100%');
        $('.coin').css('opacity','100%');
    };
 });
 $('#brandon').click(function(){
        var dir = Math.floor(Math.random()*4)+1;

        if(dir == 1){
            maze[pacman.y+1][pacman.x]=1;
        }
        if(dir == 2){
            maze[pacman.y-1][pacman.x]=1;
        }
        if(dir == 3){
            maze[pacman.y][pacman.x-1]=1;
        }
        if(dir == 4){
            maze[pacman.y][pacman.x+1]=1;
        }
        $('body').css('background-color','blue');
        $('.coin').css('opacity','100%');
        console.log('working');
        displayPacman();
        
 });

 for(var i = 1; i<=31; i++){
     var thingiwillnotkeeptyping = "<option value='"+i+"'>"+i+"</option>";
    $('#dating').append(thingiwillnotkeeptyping);
 };
 for(var y = 2020; y>=1900; y--){
    var howyoung = "<option value='"+y+"'>"+y+"</option>";
   $('#yearing').append(howyoung);
};

});