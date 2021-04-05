class Snow extends BaseClass{
    constructor(x,y){
        super(x,y,30);
        var options={
            'friction':0.05,
            'density':0.02
        }
       
        this.image = loadImage("snow5.webp");
       
        
        this.body=Bodies.circle(x,y,30,options)
        this.radius=30;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        
       

        
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50, 50);
       


    }

    update(){

       if(this.body.position>800){
           Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,800)});
       }
    }
    
}