class form{
    constructor(){}
    display(){
        var title= createElement('h2');
        title.html("CAR RACING");
        title.position(130,10);
        var input =createInput("Name");
        var button = createButton('Play');
        input.position(130, 200);
        button.position(250,250);

        button.mousePressed(function(){
            input.hide();
            button.hide();
      
            var name = input.value();
            
            playerCount+=1;
            Player.update(name)
            Player.updateCount(playerCount);
            var greeting = createElement('h3');
            greeting.html("Hello " + name )
            greeting.position(130, 160)
          });
    }
}