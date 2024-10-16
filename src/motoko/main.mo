// src/smart-wallet-backend/main.mo

actor Wallet {
    // Define the user type
    type User = {
        username: Text;
        walletAddress: Text;
    };

    // Use a variable to store users
    var users: [User] = [];

    // Function to register a user
    public func register(username: Text, walletAddress: Text) : Text {
        // Simple registration logic
        let newUser: User = { username = username; walletAddress = walletAddress };
        users := Array.append(users, [newUser]);
        return "User registered successfully!";
    }

    // Function to connect to a wallet
    public func connectWallet(username: Text, walletAddress: Text) : Text {
        // Check for user
        if (Array.exists(users, func(user) { user.username == username && user.walletAddress == walletAddress })) {
            return "Wallet connected successfully!";
        } else {
            return "Wallet address does not match or user not found!";
        }
    }
}
