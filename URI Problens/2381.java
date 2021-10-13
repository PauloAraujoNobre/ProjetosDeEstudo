import java.util.Scanner;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int N = input.nextInt();
    int K = input.nextInt();

    List<String> alunos = new ArrayList<String>();

    while(N > 0) {
      alunos.add(input.next());
      N--;
    }

    Collections.sort(alunos);

    System.out.printf("%s\n", alunos.get(K-1));
    input.close();
  }
}