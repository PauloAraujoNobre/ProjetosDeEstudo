import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    String[] inputs1 = sc.nextLine().split(" ");

    ListDinamic list = new ListDinamic();

    for (String input : inputs1) {
      list.add(input);
    }

    String[] inputs2 = sc.nextLine().split(" ");

    ListDinamic novosAmigos = new ListDinamic();

    for (String input : inputs2) {
      novosAmigos.add(input);
    }

    String op = sc.nextLine().trim();

    No headNewList = novosAmigos.get(0);
    No endNovosAmigosList = novosAmigos.get(novosAmigos.getSize() - 1);

    if (op.equalsIgnoreCase("nao")) {
      No endList = list.get(list.getSize() - 1);
      endList.prox = headNewList;
    } else {
      int indiceIndicacao = list.checkIndicacao(op);
      No indicacao = list.get(indiceIndicacao);
      if (indiceIndicacao != 0) {
        No indicacaoPai = list.get(indiceIndicacao - 1);
        indicacaoPai.prox = headNewList;

        endNovosAmigosList.prox = indicacao;
      } else {
        No startList = list.get(0);
        endNovosAmigosList.prox = startList;
        list = novosAmigos;
      }
    }

    list.setSize(list.getSize() + novosAmigos.getSize());
    list.display();

    sc.close();
  }
}

class ListDinamic {
  private No source;
  private int size;

  public ListDinamic() {
    source = null;
    size = 0;
  }

  public void add(String nome) {
    No newNo = new No(nome);

    if (source == null) {
      this.source = newNo;
      this.size = 1;
    } else {
      No base = get(this.size - 1);
      base.prox = newNo;
      this.size = this.size + 1;
    }
  }

  public No get(int index) {
    No base = source;

    while (true) {
      if (index == 0) {
        return base;
      } else {
        base = base.prox;
      }

      index--;
    }
  }

  public int getSize() {
    return this.size;
  }

  public void setSize(int size) {
    this.size = size;
  }

  public int checkIndicacao(String nome) {
    int i = this.size - 1;

    while (i >= 0) {
      No aux = get(i);
      if (aux.nome.equalsIgnoreCase(nome)) {
        return i;
      }

      i--;
    }

    return -1;
  }

  public void display() {
    No act = source;
    int spaceCount = this.size - 1;

    while (act != null) {
      System.out.print(act.nome);
      act = act.prox;
      if (spaceCount > 0) {
        System.out.print(" ");
        spaceCount--;
      }
    }

    System.out.print("\n");
  }
}

class No {
  public String nome;
  public No prox;

  public No(String nome) {
    this.nome = nome;
    prox = null;
  }
}