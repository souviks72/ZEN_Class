class Player{
    totalRuns: number;
    playerNum: number; 
    currentRun: number;

    constructor(pn: number){
        this.totalRuns = 0;
        this.playerNum = pn;
        this.currentRun = 0;
    }

    hit() :number{
        let n = Math.floor(Math.random()*7);
        this.totalRuns += n;
        this.currentRun = n;
        return n;
    }
}

class Team{
    players: Player[];
    topScorer: Player;
    topScore: number;
    score: number;
    currentPlayer: number;
    ball: number;

    constructor(){
        this.players = new Array();
        this.topScorer = null;
        this.topScore = 0;
        this.score = 0;
        this.currentPlayer = 0;
        this.ball = 1;
        for(let i=0;i<10;i++){
            this.players.push(new Player(i));
        }
    }

    hit(): number{
        let n = this.players[this.currentPlayer].hit();
        //this.score += n;
        return n;
    }

    miss(){
        this.score += 0;
        if(this.ball === 6){
            this.currentPlayer++;
            this.ball = 1;
        }
        this.ball++;
    }
}

class Match{
    t1: Team;
    t2: Team;
    turn: 0 | 1;

    constructor(){
        this.t1 = new Team();
        this.t2 = new Team();
        this.turn = 0;
    }

    play(){
        let score1 = document.querySelector('.score-1') as HTMLElement;
        let score2 = document.querySelector('.score-2') as HTMLElement;
        let time = document.querySelector('.time') as HTMLHeadingElement;
        let hit1 = document.querySelector('.hit-1') as HTMLButtonElement;
        let hit2 = document.querySelector('.hit-2') as HTMLButtonElement;
        let table1 = document.querySelector('.table1') as HTMLTableElement;
        let table2 = document.querySelector('.table2') as HTMLTableElement;
        let gen = document.querySelector('.gen') as HTMLButtonElement;
        //gen.disabled = true;
        hit2.disabled = true;
        let team1 = this.t1;
        let team2 = this.t2;

        hit1.addEventListener('click',(e: Event)=>{
            let cp = team1.currentPlayer;
            let cpCell = table1.rows[cp+1].cells[team1.ball];
            let totalCell = table1.rows[cp+1].cells[7];
            let n = team1.players[cp].hit();
            team1.score += n;
            cpCell.innerText = team1.players[cp].currentRun+"";
            totalCell.innerText = team1.players[cp].totalRuns+"";
            team1.ball = team1.ball +1;

            if(n===0 || team1.ball>6){
                let ts = team1.players[cp].totalRuns;
                if(ts > team1.topScore){
                    team1.topScorer = team1.players[cp];
                }
                team1.currentPlayer  += 1;
                team1.ball = 1;
            }

            if(team2.currentPlayer <10){
                hit2.disabled = false;
                hit1.disabled = true;
            }
           
            console.log()
            score1.innerText = team1.score+"";
            console.log(team1.ball, team1.currentPlayer);
        });

        hit2.addEventListener('click',(e: Event)=>{
            let cp = team2.currentPlayer;
            let cpCell = table2.rows[cp+1].cells[team2.ball];
            let totalCell = table2.rows[cp+1].cells[7];
            let n = team2.players[cp].hit();
            team2.score += n;
            cpCell.innerText = team2.players[cp].currentRun+"";
            totalCell.innerText = team2.players[cp].totalRuns+"";
            team2.ball = team2.ball +1;
            if(n===0 || team2.ball>6){
                let ts = team2.players[cp].totalRuns;
                if(ts > team2.topScore){
                    team2.topScorer = team2.players[cp];
                }
                team2.currentPlayer  += 1;
                team2.ball = 1;
            }
            score2.innerText = team2.score+"";
            if(team1.currentPlayer <10){
                hit1.disabled = false;
                hit2.disabled = true;
            }
        });  
        
        if(team1.currentPlayer>=9 && team2.currentPlayer>=9){
            hit1.disabled = true;
            hit2.disabled = true;
            gen.disabled = false;
        }

        gen.addEventListener('click',(e: Event)=>{
            let t1Score = team1.score;
            let t2Score = team2.score;
            let wonBy = null;
            if(t1Score > t2Score){
                wonBy = 1;
            }else{
                wonBy = 2;
            }
            let winner = document.querySelector('.winner') as HTMLElement;
            winner.innerText = `Team${wonBy}`;
            let ts1 = team1.topScorer.playerNum;
            let ts2 = team2.topScorer.playerNum;
            let mom = document.querySelector('.mom') as HTMLElement;
            if(team1.topScore > team2.topScore){
                mom.innerHTML = `Player${ts1 + 1}<br>Team1`;
            }else{
                mom.innerHTML = `Player${ts2+1}<br>Team2`;
            }
        });
    }
}

let m = new Match();
m.play();