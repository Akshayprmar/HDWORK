let users = [
    { 
        "id": 1, 
        "name": "Akshay", 
        "wallet": { 
            "deposit": 100, 
            "bonus": 60, 
            "winnings": 340
        }
    },
    { 
        "id": 2, 
        "name": "Shailesh", 
        "wallet": { 
            "deposit": 200, 
            "bonus": 120, 
            "winnings": 680
        }
    },
    { 
        "id": 3, 
        "name": "Sonam", 
        "wallet": { 
            "deposit": 10, 
            "bonus": 5, 
            "winnings": 20
        }
    },
];
  
module.exports.getUserWallet = userId => users.find( (e) => e.id == userId);

module.exports.isValidWallet = (wallet) => {

    if (
        wallet && 
        typeof wallet.deposit === "number" && wallet.deposit >= 0 &&
        typeof wallet.bonus === "number" && wallet.bonus >= 0 &&
        typeof wallet.winnings === "number" && wallet.winnings >= 0 
    ) {
        return true;
    } else {
        return false;
    }
};
