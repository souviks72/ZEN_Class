var Player = /** @class */ (function () {
    function Player(pn) {
        this.totalRuns = 0;
        this.playerNum = pn;
        this.currentRun = 0;
    }
    Player.prototype.hit = function () {
        var n = Math.floor(Math.random() * 7);
        this.totalRuns += n;
        this.currentRun = n;
        return n;
    };
    return Player;
}());
var Team = /** @class */ (function () {
    function Team() {
        this.players = new Array();
        this.topScorer = null;
        this.topScore = 0;
        this.score = 0;
        this.currentPlayer = 0;
        this.ball = 1;
        for (var i = 0; i < 10; i++) {
            this.players.push(new Player(i));
        }
    }
    Team.prototype.hit = function () {
        var n = this.players[this.currentPlayer].hit();
        //this.score += n;
        return n;
    };
    Team.prototype.miss = function () {
        this.score += 0;
        if (this.ball === 6) {
            this.currentPlayer++;
            this.ball = 1;
        }
        this.ball++;
    };
    return Team;
}());
var Match = /** @class */ (function () {
    function Match() {
        this.t1 = new Team();
        this.t2 = new Team();
        this.turn = 0;
    }
    Match.prototype.play = function () {
        var score1 = document.querySelector('.score-1');
        var score2 = document.querySelector('.score-2');
        var time = document.querySelector('.time');
        var hit1 = document.querySelector('.hit-1');
        var hit2 = document.querySelector('.hit-2');
        var table1 = document.querySelector('.table1');
        var table2 = document.querySelector('.table2');
        var gen = document.querySelector('.gen');
        //gen.disabled = true;
        hit2.disabled = true;
        var team1 = this.t1;
        var team2 = this.t2;
        hit1.addEventListener('click', function (e) {
            var cp = team1.currentPlayer;
            var cpCell = table1.rows[cp + 1].cells[team1.ball];
            var totalCell = table1.rows[cp + 1].cells[7];
            var n = team1.players[cp].hit();
            team1.score += n;
            cpCell.innerText = team1.players[cp].currentRun + "";
            totalCell.innerText = team1.players[cp].totalRuns + "";
            team1.ball = team1.ball + 1;
            if (n === 0 || team1.ball > 6) {
                var ts = team1.players[cp].totalRuns;
                if (ts > team1.topScore) {
                    team1.topScorer = team1.players[cp];
                }
                team1.currentPlayer += 1;
                team1.ball = 1;
            }
            if (team2.currentPlayer < 10) {
                hit2.disabled = false;
                hit1.disabled = true;
            }
            console.log();
            score1.innerText = team1.score + "";
            console.log(team1.ball, team1.currentPlayer);
        });
        hit2.addEventListener('click', function (e) {
            var cp = team2.currentPlayer;
            var cpCell = table2.rows[cp + 1].cells[team2.ball];
            var totalCell = table2.rows[cp + 1].cells[7];
            var n = team2.players[cp].hit();
            team2.score += n;
            cpCell.innerText = team2.players[cp].currentRun + "";
            totalCell.innerText = team2.players[cp].totalRuns + "";
            team2.ball = team2.ball + 1;
            if (n === 0 || team2.ball > 6) {
                var ts = team2.players[cp].totalRuns;
                if (ts > team2.topScore) {
                    team2.topScorer = team2.players[cp];
                }
                team2.currentPlayer += 1;
                team2.ball = 1;
            }
            score2.innerText = team2.score + "";
            if (team1.currentPlayer < 10) {
                hit1.disabled = false;
                hit2.disabled = true;
            }
        });
        if (team1.currentPlayer >= 9 && team2.currentPlayer >= 9) {
            hit1.disabled = true;
            hit2.disabled = true;
            gen.disabled = false;
        }
        gen.addEventListener('click', function (e) {
            var t1Score = team1.score;
            var t2Score = team2.score;
            var wonBy = null;
            if (t1Score > t2Score) {
                wonBy = 1;
            }
            else {
                wonBy = 2;
            }
            var winner = document.querySelector('.winner');
            winner.innerText = "Team" + wonBy;
            var ts1 = team1.topScorer.playerNum;
            var ts2 = team2.topScorer.playerNum;
            var mom = document.querySelector('.mom');
            if (team1.topScore > team2.topScore) {
                mom.innerHTML = "Player" + (ts1 + 1) + "<br>Team1";
            }
            else {
                mom.innerHTML = "Player" + (ts2 + 1) + "<br>Team2";
            }
        });
    };
    return Match;
}());
var m = new Match();
m.play();
