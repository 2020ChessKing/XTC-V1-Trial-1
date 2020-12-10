class Try
{
    constructor() 
    {
    }

    display()
    {
        this.getPoints();
    }

    getPoints()
    {
        var ref = database.ref('Pos');
        ref.on('value', (data) => {
            x = data.val().x;
            y = data.val().y;
        })
    }

    update()
    {
        database.ref('Pos').update(
            {
                x : x,
                y : y,
            }
        )
    }
}