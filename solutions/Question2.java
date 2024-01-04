import java.util.ArrayList;

public class Question2 {
    public static int minCoins(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        dp[0] = 0;

        for (int i = 1; i <= amount; i++) {
            dp[i] = i + 1;
            for (int coin: coins) {
                if (i - coin >= 0 && dp[i - coin] != i + 1) {
                    dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
                }
            }
        }

        return dp[amount] == Integer.MAX_VALUE ? -1 : dp[amount];
    }

    public static void main(String[] args) {
        int[] arr = {1, 3, 4, 5};
        int amount = 21;
        System.out.println("Amount: " + amount);
        System.out.println("Minimum coins to form amount: " + minCoins(arr, amount));
    }
}
