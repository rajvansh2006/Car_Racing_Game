class Form{

constructor(){

    this.title = createElement('h2');
    this.input = createInput('Enter Your Name');
    this.button = createButton('Play');
    this.greetings = createElement('h2');
  
}

display(){

        this.title.html("WELCOME TO CAR RACING");
        this.title.position(130,100);
        this.input.position(130,200);
        this.button.position(150,250);

        this.button.mousePressed(()=>{

            this.title.hide();
            this.button.hide();
            this.input.hide();
            player.name = this.input.value();
            playerCount = playerCount+1;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();

            this.greetings.html("Welcome "+ player.name);
            this.greetings.position(130,200);

            
        })

}
hide(){
    this.title.hide();
    this.button.hide();
    this.input.hide();
    this.greetings.hide();
}

end(){
    var greetingsto=createElement('h2');
    greetingsto.html("Congratulations "+player.name+" your rank is "+rank);
    greetingsto.position(displayWidth/2-100,displayHeight/2-100);
    var statement=createElement('h2')
    statement.html("Press Reset and then reload to restart the Game")
    statement.position(displayWidth/2-100,displayHeight/2-300)
    if(player.rank===4){

    
var reset=createButton('reset');
reset.position(displayWidth-200,50)
reset.mousePressed(()=>{
    player.updatecarsatend(0);
    player.updateCount(0);
    game.updateState(0);
    var playerref=database.ref('players');
    playerref.remove();
    greetingsto.hide();
})
    }


}
}