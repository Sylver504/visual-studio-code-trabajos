#include<iostream>  
#include<conio.h>  
#include<windows.h> 
#include<vector> 
#include<string> 
#include<stdio.h> 
#include<stdlib.h> 
#define ENTER 13 
#define BACKSPACE 8 
#define INTENTOS 3 
#define N 10 
HANDLE console=GetStdHandle(STD_OUTPUT_HANDLE); using namespace std; 
//declarar funciones 
void menu(); 
void gotoxy(int x,int y); 
void cuadro(int x,int y,int x2,int y2); 
//estructura de funcion principal 
int main(){ 
vector<string>usuarios; 
vector<string>claves; 
//agregar usuarios al vector 
usuarios.push_back("jose"); 
usuarios.push_back("juan"); 
usuarios.push_back("pedro"); 
//agregar claves al vector 
claves.push_back("disco"); 
claves.push_back("cancion"); 
claves.push_back("musica"); 
string usuario,contrasena; 
int contador=0; 
bool ingresa=false; 
do{ 
system("color 0F"); 
system("cls"); 
cout<<"BIENVENIDO..."<<endl; 
cout<<""<<endl; 
cout<<"ingrese el nombre del usuario....:"; 
getline(cin,usuario);
char caracter; 
cout<<"ingrese su clave....:"; 
caracter=getch(); 
contrasena=""; 
while(caracter != ENTER){ 
if(caracter != BACKSPACE){ 
contrasena.push_back(caracter); 
cout<<"*"; 
} 
else{ 
if(contrasena.length()>0){ 
contrasena=contrasena.substr(0,contrasena.length()-1); } 
} 
caracter=getch(); 
} 
for(int i=0;i<usuarios.size();i++){ 
if(usuarios[i]==usuario&&claves[i]==contrasena){ ingresa=true; 
break; 
} 
} 
if(ingresa){ 
cout<<""<<endl; 
cout<<""<<endl; 
cout<<"BIENVENIDO"<<endl; 
cout<<""<<endl; 
cout<<""<<endl; 
cout<<"USUARIO Y CLAVE SON CORRECTAS"<<endl; cin.get(); 
} 
contador++; 
}while(ingresa==false&&contador<INTENTOS); if(ingresa==false){ 
cout<<""<<endl; 
cout<<""<<endl; 
cout<<"no pudo ingresar .... adios"<<endl; 
cout<<""<<endl; 
cout<<""<<endl; 
system("pause"); 
}else{ 
system("cls");
menu(); 
} 
cin.get(); 
return 0; 
} 
//estructura de la FUNCION MENU 
void menu(){ 
system("cls"); 
system("color A1"); 
cuadro(20,1,90,24); 
char op1,op2; 
do{ 
gotoxy(50,2);cout<<"EMPRESA JETSTEREO"<<endl; 
gotoxy(50,4);cout<<"SISTEMA DE VENTAS"<<endl; 
cout<<""<<endl; 
cout<<""<<endl; 
gotoxy(45,7);cout<<"MENU PRINCIPAL"<<endl; 
gotoxy(30,10);cout<<"(1) PRODUCTOS"<<endl; 
gotoxy(30,12);cout<<"(2) PROVEEDORES"<<endl; 
gotoxy(30,14);cout<<"(3) CLIENTES"<<endl; 
gotoxy(30,16);cout<<"(4) EMPLEADOS"<<endl; 
gotoxy(30,18);cout<<"(5) SALIR"<<endl; 
gotoxy(40,22);cout<<"elija una opcion....."; 
cin>>op1; 
if(op1!='1'&&op1!='2'&&op1!='3'&&op1!='4'&&op1!='5'){ cout<<"opcion incorrecta"<<endl; 
system("pause"); 
} 
}while(op1!='1'&&op1!='2'&&op1!='3'&&op1!='4'&&op1!='5'); if(op1=='1'){ 
system("cls"); 
system("color f1"); 
string codigo,nombre,precio,medida,cantidad; 
cout<<"PRODUCTOS"<<endl; 
cout<<""<<endl; 
cout<<""<<endl; 
cout<<""<<endl; 
cout<<"codigo.......";cin>>codigo; 
cout<<"nombre.......";cin>>nombre; 
cout<<"precio.......";cin>>precio; 
cout<<"medida.......";cin>>medida; 
cout<<"cantidad.....";cin>>cantidad;
system("pause"); 
menu(); 
} 
if(op1=='2'){ 
cout<<"hola proveedores"<<endl; 
} 
if(op1=='3'){ 
cout<<"hola clientes"<<endl; 
} 
if(op1=='4'){ 
cout<<"hola empleados"<<endl; 
} 
if(op1=='5'){ 
system("exit"); 
} 
} 
void gotoxy(int x,int y){ 
HANDLE hcon; 
hcon=GetStdHandle(STD_OUTPUT_HANDLE); COORD dwPos; 
dwPos.X=x; 
dwPos.Y=y; 
SetConsoleCursorPosition(hcon,dwPos); } 
void cuadro(int x,int y,int x2,int y2){ 
int i; 
for(i=x;i<x2;i++){ 
gotoxy(i,y);cout<<"@"; 
gotoxy(i,y2);cout<<"@"; 
} 
for(i=y;i<y2;i++){ 
gotoxy(x,i);cout<<"$"; 
gotoxy(x2,i);cout<<"$"; 
} 
}
