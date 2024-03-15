enchant(); /*FO=FallObject(ノーツ)
FO1=Class.create(Sprite,{
	initialize: function(x,y){
		Sprite.call(this,32,32);

});		this.image=game.assets['　'];
FO2=Class.create(Sprite,{
	initialize: function(x,y){
		Sprite.call(this,32,32);

});		this.image=game.assets['　'];
FO3=Class.create(Sprite,{
	initialize: function(x,y){
		Sprite.call(this,32,32);
		this.image=game.assets['　'];
});
FO4=Class.create(Sprite,{
	initialize: function(x,y){
		Sprite.call(this,32,32);
		this.image=game.assets['　'];

});
window.onload=function(){
game=new Game(320,320);
game.fps=100;
game.preload('./img/chara1.png','./img/　');
game.onload=function(){

package app.javasample;

import java.awt.Color;
import java.awt.Graphics;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

import javax.swing.JFrame;
import javax.swing.JPanel;
/**
* オブジェが多数落下するサンプルプログラム
* @author piza
*
*/
public class Sample {

public static void main(String[] args){

new SampleHoge();

}
}

class SampleHoge{
private JFrame frame;
private FallObj[] fobj = new FallObj[5];

public SampleHoge(){
window();//ウィンドウを生成

//指定msでずっとrepaintさせる
Timer t = new Timer();
t.schedule(new Fall(), 0,50);


Timer addObj = new Timer();
addObj.schedule(new AddObj(), 0,500);//好きなタイミングでobj落下
}
/*全Objを一斉に落下させるためにFallObjのfallを呼ぶメソッド*/
class Fall extends TimerTask {
public void run(){
for(int i = 0; i < 5 ; i++){
fobj[i].fall();
}
}
}
/*Objをランダムに追加するメソッド*/
class AddObj extends TimerTask {
Random rand = new Random();
public void run(){
fobj[rand.nextInt(5)].addObj();
}
}
/*swingでwindow生成*/
private void window(){
frame = new JFrame();
frame.setTitle("sample");
frame.setSize(200, 200);
frame.setLocation(30,30);
frame.setLayout(null);
frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
for ( int i = 0 ; i < 5 ; i++ ){
fobj[i] = new FallObj();
fobj[i].setSize(30,150);
fobj[i].setLocation(10 + 35 * i,10);
frame.add(fobj[i]);
}
frame.setVisible(true);
}

}
/**
* JPanelとしてGraphic描画するクラス
*/
class FallObj extends JPanel{
private static final long serialVersionUID = 1L;
private int[] obj = new int[0];
public FallObj(){
setBackground(Color.WHITE);
}
/*Obj配列を新しく追加*/
public void addObj(){
int[] o = new int[obj.length +1];
for(int i = 0; i < obj.length ;i++){
o[i] = obj[i];
}
obj = o;
}
/*Obj配列の先頭を削除*/
private void delObj(int cnt){
int[] o = new int[obj.length -1];
for(int i = 0; i < o.length ;i++){
o[i] = obj[i +1];
}
obj = o;
}
/*呼び出すごとにObj配列の値を＋１する*/
public void fall(){
for(int i = 0; i < obj.length ; i++){
obj[i] += 2;//<=落下するスピード
if(150 < obj[i]){
delObj(i);
}
}
repaint();
}
/*実際に描画するメソッド*/
public void paintComponent(Graphics g){
super.paintComponent(g);
g.setColor(new Color(255,0,255,127));
for(int i : obj){
g.fillRect(5, i, 20, 20);
}
}
}
}
game.start();
}