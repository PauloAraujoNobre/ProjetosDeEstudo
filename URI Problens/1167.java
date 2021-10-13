import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        while (true) {
          String Ns = sc.nextLine();
          Integer N = Integer.parseInt(Ns);

          if (N == 0) {
            break;
          }

          ListDinamic list = new ListDinamic();

          for (int i = 0; i < N; i++) {
            String[] inputs = sc.nextLine().split(" ");

            Integer valor = Integer.parseInt(inputs[1]);
            list.add(inputs[0], valor);
          }

          int indiceAtual = 0;
          int valueRemove = list.get(indiceAtual).valor;

          while(list.getSize() > 1) {
            if (valueRemove % 2 == 0) {
              indiceAtual -= (valueRemove % list.getSize());
            } else {
              indiceAtual += (valueRemove % list.getSize());
            }

            if (indiceAtual < 0) {
              indiceAtual = list.getSize() + indiceAtual;
            }

            while (indiceAtual >= list.getSize()) {
              indiceAtual = indiceAtual % list.getSize();
            }

            valueRemove = list.get(indiceAtual).valor;  
            list.remove(indiceAtual);

            if (valueRemove % 2 != 0) {
              indiceAtual--;
            }
          }

          System.out.printf("Vencedor(a): %s\n", list.get(0).nome);
        }
        
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

  public void add(String nome, Integer valor) {
    No newNo = new No(nome, valor);
    
    if (source == null) {
      this.source = newNo;
      this.size = 1;
    } else {
      No base = get(this.size - 1);
      base.prox = newNo;
      this.size = this.size + 1;
    }
  }

  public void remove(int i) {
    while(true) {
      No current = get(i);
    
      if (i == 0) {
        source = source.prox;
      } else {
        No old = get(i - 1);
        old.prox = current.prox;
      }

      break;
    }

    this.size = this.size - 1;
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

  public void display() {
		No act = source;

		while (act != null) {
			System.out.println(act.nome + " " + act.valor + " ");
			act = act.prox;
		}

		System.out.println();
	}
}

class No {
  public String nome;
  public Integer valor;
  public No prox;

  public No(String nome, Integer valor) {
    this.nome = nome;
    this.valor = valor;
    prox = null;
  }
}