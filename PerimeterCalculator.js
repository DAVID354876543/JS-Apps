var choice = prompt("Welcome to Perimeter Calculator.  \n Please Enter your choice.  \n1.Perimeter of Rectangle.  \n2.Perimeter of Triangle.  \n3.Circumference of Circle.  \n4.Perimeter of Parallelogram.");

if (choice == '1') {
    var l = prompt('Enter the length')
    var b = prompt('Enter the breadth')
    var result = 2 * (Number(l) + Number(b))
    alert('The Perimeter is ' + result)
}

if (choice == '2') {
    var s1 = prompt('Enter the first side')
    var s2 = prompt('Enter the second side')
    var s3 = prompt('Enter the third side')
    var result = Number(s1) + Number(s2) + Number(s3)
    alert('The Perimeter is ' + result)
}

if (choice == '3') {
    var r = prompt('Enter the radius')
    var result = 2 * 3.14 * Number(r)
    alert('The Circumference is ' + result)
}

if (choice == '4') {
    var b = prompt('Enter the base')
    var s = prompt('Enter the side')
    var result = 2 * (Number(b) + Number(s))
    alert('The Perimeter is ' + result)
}