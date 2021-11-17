# HDWORKS

## knight problem 
## Questions:
Q1. Develop an algorithm where we have a chess board with only one knight on the board. Now
create a function which takes input as the initial position and final position of the knight. We
need to find how many steps a knight will take to reach the final position(minimum).

## Solutions:
open the knightMoves.js file in a browser and look in the console.

## Questions:
Q2. In FanFight App, User deposits Money and It gets added into FanFight Wallet
Wallet has 3 Buckets,
I. Deposit(d1) – Added by user from his bank account
II. Bonus(b1) – Incentive given by FanFight on Depositing Money. Only 10% of Entry
Fee can be user from Bonus Bucket
III. Winnings(w1) – After Joining a match, if a user wins money gets added in Winning
Bucket
IV. FanFight Wallet(fw) = Deposit(d1) + Bonus(b1) + Winnings(w1)
• Let’s say a particular contest has entry fee(e1) also to assume user has sufficient
balance
to join the contest with an entry fee(e1).
• Further, retention team of FanFight wants to give discount to user on entry fee which
could vary from 0% to 100%.
• Priority to deduct Money from FanFight Wallet
Bonus > Deposit > Winnings
• For Discounting(x%) – x% of entry fee(e1) would be discounted first (say after discount
entry fee becomes e2) and then when user joins the contest e2 will be deducted from
user’s FanFight wallet.
Create a program in node.js which takes the input variable as discounting %age for
contest entry fee and discounts for the user and when user joins the contest after getting
discount it deducts the money with above logic from user’s wallet.
Please create the program using serverless Framework and package as per the
standard.

## Solutions:
###  Start Command: npm run start
###  END POINT : /wallet/:userId/:entryFee/:discount
       /wallet/userID/entryFee/discount is the parameter list format
# Example:
- http://localhost:3000/wallet/1/400/20 
- http://localhost:3000/wallet/2/400/20
- http://localhost:3000/wallet/3/400/20
- http://localhost:3000/wallet/3/0/10

