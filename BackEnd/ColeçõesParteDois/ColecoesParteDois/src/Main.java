import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Pessoa> listaMasculino = new ArrayList<>();
        List<Pessoa> listaFeminino = new ArrayList<>();

        while (true) {
            System.out.println("Digite os nomes e sexos (ex.: Ana,F ou João,M). Digite 'sair' para encerrar: ");
            String entrada = scanner.nextLine();

            if (entrada.equalsIgnoreCase("sair")){
                break;
            }

            String[] partes = entrada.split(",");

            if (partes.length != 2) {
                System.out.println("Formato inválido. Use: Nome,F ou Nome,M");
                continue;
            }

            String nome = partes[0].trim();
            String sexo = partes[1].trim().toUpperCase();

            Pessoa pessoa = new Pessoa(nome, sexo);

            if (sexo.equals("F")) {
                listaFeminino.add(pessoa);
            } else if (sexo.equals("M")) {
                listaMasculino.add(pessoa);
            } else {
                System.out.println("Sexo inválido. Use 'M' ou 'F'.");
            }
        }

        System.out.println("\n Grupo Feminino: ");
        for (Pessoa p : listaFeminino) {
            System.out.println(p.getNome());
        }

        System.out.println("\n Grupo Masculino: ");
        for (Pessoa p : listaMasculino) {
            System.out.println(p.getNome());
        }
    }
}