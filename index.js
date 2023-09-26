 	//creation du canvas 
 	const canvas= document.querySelector('canvas')
	const c = canvas.getContext('2d')
	canvas.width = 1280
	canvas.height = 768
	c.fillStyle = 'white'
	c.fillRect(0,0,canvas.width,canvas.height)

	//dessin de l image
	const image= new Image()
	
	image.src= 'img/gameMap.png'
	
	//creationd un bloc rouge qui se deplace
	let x = 200
	class Enemy {
		constructor(){
			this.position={
				x:0,
				y:0
			}
			this.width=100
			this.height=100
		}
		draw(){
			c.fillStyle= 'yellow'
		c.fillRect(this.position.x,this.position.y,this.width,this.height)
		}
		update(){
			this.draw(
				this.position.x+=1
				)
		}
	}
	const enemy= new Enemy()

	function animate() {
		requestAnimationFrame(animate)
		{c.drawImage(image, 0,0)}
		c.fillStyle= 'green'
		c.fillRect(x,200,200,700)
		x++

	}
	animate()


