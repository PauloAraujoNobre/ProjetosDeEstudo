#include <stdio.h>
#include <math.h>
int main(){
    float x1, y1, r1, x2, y2, r2, dist;
    while(scanf("%f %f %f %f %f %f", &r1, &x1, &y1, &r2, &x2, &y2) != EOF){
        dist = sqrt(pow((x1-x2), 2.0) + pow((y1-y2), 2.0));
        if(r1 >= dist+r2){
            printf("RICO\n");
        }else{
            printf("MORTO\n");
        }
    }
    return 0;
}
