public class Question1 {
    public static int recurse(int a) {
        if (a == 1) {
            return 1;
        } else if (a == 2) {
            return 2;
        }
        return recurse(a - 1) + recurse(a - 2);
    }
    public static void main(String[] args) {
        int steps = 20;
        int totalWays = recurse(steps);
        System.out.println("Total ways to climb " + steps + " steps: " + totalWays);
    }
}