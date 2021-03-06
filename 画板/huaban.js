/*
* @Author: dell
* @Date:   2017-10-10 14:59:08
* @Last Modified by:   dell
* @Last Modified time: 2017-10-11 19:51:39
*/
window.onload = function(){
	let canvas = document.querySelector('canvas');
	let ctx = canvas.getContext("2d");
	let tools = document.querySelectorAll('.tool');
	let eraser1 = document.querySelector('.eraser1');
	let opacity = document.querySelector('.opacity');
	let eraser = document.querySelector('#eraser');
	let pal = new palette(canvas,ctx,opacity);
	let ziti = document.querySelector('#ziti');
	let obj = document.querySelector('.obj');


	tools.forEach(element=>{
		element.onclick = function(){
			let num = 0;
			document.querySelector('li[active = true]').setAttribute('active',false);
			this.setAttribute('active',true);
			if(this.id == 'pencil'){
				pal.pencil();
				return;
			}
			if(this.id == "poly" || this.id == "polyJ" ){
				num = prompt('请输入',5);
			}
			if(this.id == 'chexiao'){
				pal.chexiao();
			}
			if(this.id == 'caijian'){
				pal.clip(obj);
				return;
			}
			
			pal.draw(this.id,num);
		}
	})
	tools[0].onclick();
	eraser.onclick = function(){
		let w = prompt('橡皮尺寸',30);
		eraser1.style.width = `${w}px`;
		eraser1.style.height = `${w}px`;
		pal.clear(eraser1,w,w);
	}
	ziti.onclick = function(){
		pal.font();
	}


}