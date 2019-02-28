var app = new Vue
({
    el: "#app",

    data:
    {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        combatLog: []
    },

    computed:
    {
       
    },

    methods:
    {
        startNewGame()
        {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameIsRunning = true;
            this.combatLog = [];
        },

        playerMove(moveType)
        {
            switch(moveType)
            {
                case 1:
                    this.combatLog.unshift
                    (
                        {
                            text: "Player's attack damages monster for " + this.playerAttack(10),
                            isPlayer: true
                        }
                    );
                    break;
                case 2:
                    this.combatLog.unshift
                    (
                        {
                            text: "Player's special attack damages monster for " + this.playerAttack(18),
                            isPlayer: true
                        }
                    );
                    break;
                case 3:
                    this.combatLog.unshift
                    (
                        {
                            text: "Player heals himself for " + this.playerHeal(),
                            isPlayer: true
                        }
                    );
                    break;
                case 4:
                    this.combatLog.unshift
                    (
                        {
                            text: "The player has given up!",
                            isPlayer: true
                        }
                    );
                    this.giveUp();
                    return;
                default:
                    alert("Invalid move!");
            }

            this.combatLog.unshift
            (
                {
                    text: "Monster damages player for " + this.monsterAttack(),
                    isPlayer: false
                }
            );
        },

        monsterTakeDamage(amount)
        {
            this.monsterHealth -= amount;

            if(this.monsterHealth <= 0)
            {
                this.combatLog.unshift
                (
                    {
                        text: "The monster has died!",
                        isPlayer: false
                    }
                );
                this.gameOver();
                return amount;
            }

            return amount;
        },

        playerTakeDamge(amount)
        {
            this.playerHealth -= amount;

            if(this.playerHealth <= 0)
            {
                this.combatLog.unshift
                (
                    {
                        text: "The player has died!",
                        isPlayer: true
                    }
                );
                this.gameOver();
                return amount;
            }

            return amount;
        },

        playerAttack(maxDamage)
        {
            return this.monsterTakeDamage(this.getRandomNumber(maxDamage));
        },

        playerHeal()
        {
            var healAmount = this.getRandomNumber(15);
            
            this.playerHealth += healAmount;

            if(this.playerHealth > 100)
            {
                healAmount -= (this.playerHealth - 100);
                this.playerHealth = 100;
            }

            return healAmount;
        },

        monsterAttack()
        {
            return this.playerTakeDamge(this.getRandomNumber(12));
        },

        giveUp()
        {
            alert("You gave up!");
            this.gameIsRunning = false;
        },

        gameOver()
        {
            if(this.playerHealth <= 0)
            {
                alert("You lose!");
            }
            else
            {
                alert("You win!");
            }

            this.gameIsRunning = false;
        },

        getRandomNumber(maxAmount)
        {
            return Math.ceil(Math.random() * maxAmount);
        }
    }
});