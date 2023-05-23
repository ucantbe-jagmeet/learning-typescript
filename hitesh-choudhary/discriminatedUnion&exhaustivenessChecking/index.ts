// discriminated the intereface by different property is called discrimination union

interface Circle {
    kind : "circle",
    radius : number
}

interface Square
{
    kind : "sqaure" ,
    side : number
}

interface Rectangle
{
    kind : "rectangle" ,
    length : number ,
    width : number
}

type Shape = Circle | Square

function getTrueShape ( shape : Shape)
{
    if (shape.kind === 'circle') 
    {
        return Math.PI * shape.radius **2;
    }

    return shape.side * shape.side ;
}

function getArea ( shape: Shape)
{
    switch(shape.kind)
    {
        case "circle":
            return Math.PI * shape.radius **2;

        case "sqaure":
            return shape.side * shape.side ;

        default :
            const _defaultforshape: never = shape ;
            return _defaultforshape;
    }

}