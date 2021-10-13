import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;

class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    ArrayList<String> amigosYES = new ArrayList<String>();
    ArrayList<String> amigosNO = new ArrayList<String>();

    while(true) {
      String line = sc.nextLine();
      if (line.equalsIgnoreCase("FIM")) {
        break;
      } else {
        String[] input = line.split(" ");

        if (input[1].equalsIgnoreCase("YES")) {
          if (!amigosYES.contains(input[0])) {
            amigosYES.add(input[0]);
          }
        }

        else if (input[1].equalsIgnoreCase("NO")) {
          amigosNO.add(input[0]);
        }
      }
    }

    int countLetter = 0;

    for (String key : amigosYES) {
      if (key.length() > countLetter) {
        countLetter = key.length();
      }
    }

    String winner = "";
    
  
    for (String key : amigosYES) {
      if (key.length() == countLetter) {
        winner = key;
        break;
      }
    }

    Collections.sort(amigosYES);
    Collections.sort(amigosNO);

    for (String amigoYES : amigosYES) {
      System.out.printf("%s\n", amigoYES);
    }

    for (String amigoNO : amigosNO) {
      System.out.printf("%s\n", amigoNO);
    }

    System.out.printf("\nAmigo do Habay:\n%s\n", winner);
    
    sc.close();
  }
}