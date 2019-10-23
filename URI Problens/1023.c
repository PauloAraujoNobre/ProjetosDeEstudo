#include <stdio.h>
struct casa{
	int mor;
	int imo;
};
int main(){
	int n, i, j, k, w, aux;
	scanf("%d", &n);
	int cons[1000000];
	
	
	struct casa imovel[1000000];
	
	for(i = 0; i < n; i++)
		scanf("%d %d", &imovel[i].mor, &imovel[i].imo);
	
	for(j = 0; j < n; j++)
		cons[i] = imovel[j].imo / imovel[j].mor;
	
	for(i = 1; i < n; i++){
		j = i - 1;
		aux = cons[i];
		while(cons[i] < cons[j] && j >= 0)
			cons[j + 1] = cons[j];
		cons[j + 1] = aux;
	}
	
	for(k = 0; k < n; k++)
		printf("%d-%d\n", imovel[k].mor, cons[0]);
	
	int somaDiv = 0, somaNum = 0;
	
	for(w = 0; w < n; w++)
		soma += imovel[w].mor;
	
	for(i = 0; i < n; i++)
		somaNum += imovel[w].imo;
	
	float result = somaNum / somaDiv;
	
	printf("Consumo medio: %.2f.\n", result);  
	
	return 0;
}
