function getDistance(x1, y1, x2, y2)
{
    let X = Math.pow(x1-x2,2);
    let Y = Math.pow(y1-y2,2);
    return Math.sqrt(X+Y);
}