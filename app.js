// Chapter 14 to 16

// Question 1

// var studentsNames = []

// Qysetion 2

// var studentsNames = newArray()

// Question 3

// let studentsNames = [ "Aliza", "Rafay", "Sarim"]
// console.log(studentsNames)
// Qusetion 4

// let values = [1, 5, 17, 8, 99]
// console.log(values)
// Question 5

// let mcq = [true , false]
// console.log(mcq)
// Question 6

// let mixedArray = [true, "hamdard", 78, [], ]
// console.log(mixedArray)

// Question 7

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]

// document.lnln("Education Qualifications in Pakistan:<br><br>")
// document.writeln("1) " + qualifications[0] + "<br>")
// document.writeln("2) " + qualifications[1] + "<br>")
// document.writeln("3) " + qualifications[2] + "<br>")
// document.writeln("4) " + qualifications[3] + "<br>")
// document.writeln("5) " + qualifications[4] + "<br>")
// document.writeln("6) " + qualifications[5] + "<br>")
// document.writeln("7) " + qualifications[6] + "<br>")
// document.writeln("8) " + qualifications[7] + "<br>")

// Question 8

// var studentsNames = ["Mbappe" , "Valverde" , "Bellingham"]

// var studentsScore = [480 , 435 , 473]

// var totalScore = 500

// document.writeln("Score of" + " " + studentsNames[0] + " is " + studentsScore[0] + ". Percentage:" + (studentsScore[0] / totalScore) * 100 + "% <br>") 

// document.writeln("Score of" + " " + studentsNames[1] + " is " + studentsScore[1] + ". Percentage:" + (studentsScore[1] / totalScore) * 100 + "% <br>") 

// document.writeln("Score of" + " " + studentsNames[2] + " is " + studentsScore[2] + ". Percentage:" + (studentsScore[2] / totalScore) * 100 + "% <br>") 

// Question 9
// a

// var colours = []
// var addToBeginning = prompt("Which colour should be added at the beginning?")

// colours.unshift(addToBeginning)

// document.writeln("After adding a colour at the start, <br>" + colours + "<br> <br>")

// b

// var addToEnding = prompt("Which colour should be added at the ending?")

// colours.push(addToEnding)

// document.writeln("After adding a colour at the end, <br>" + colours + "<br> <br>")

// c

// colours.unshift("yellow" , "black")

// document.writeln("After adding two more colours at the start, <br>" + colours +  "<br> <br>")

// d

// colours.shift()

// document.writeln("After deleting one colour from the start, <br>" + colours +  "<br> <br>")

// e

// colours.pop()

// document.writeln("After deleting one more colour from the end, <br>" + colours +  "<br> <br>")

// f

// var addOnWhichIndex = +prompt("At which index you wanna add the number?")
// var colourToAdd = prompt("Enter a colour you wanna add.")

// colours.splice(addOnWhichIndex , 0 , colourToAdd)

// document.writeln("After adding colour at index " + addOnWhichIndex + ", <br>" + colours +  "<br> <br>")

// g

// var delOnWhichIndex = +prompt("At which index you wanna delete colours?")
// var howManyColours = +prompt("How many colours you wanna delete?")

// colours.splice(delOnWhichIndex , howManyColours)

// document.writeln("After deleting " + howManyColours + " colours from index " + delOnWhichIndex + ", <br>" + colours +  "<br> <br>")

// Question 10

// var scoresOfStudents = [400 , 345 , 359 , 500 , 378 , 300 , 323 , 412 , 453]

// document.writeln("Scores of Students:"+ " " + scoresOfStudents + "<br> <br>")

// scoresOfStudents.sort()

// document.writeln("Ordered Scores of Students:" + " " + scoresOfStudents)

// Question 11

// var cities = ["Karachi" , "Islamabad" , "Peshawar" , "Lahore" , "Gilgit" , "Sukkur" , "Quetta"]

// document.writeln("Cities list: <br>" + " " + cities + "<br> <br>")

// var selectedCities = cities.slice(2,5)

// document.writeln("Selected Cities list: <br>" + " " + selectedCities)

// Question 12

// var arr = ["This" , "is" , "my" , "cat"]

// var singleString = arr.join(" ")

// document.writeln("Array: <br>" + arr + "<br> <br>")
// document.writeln("String: <br>" + singleString)

// Question 13

// var fifo = []

// fifo.push("keyboard")
// fifo.push("mouse")
// fifo.push("monitor")
// fifo.push("printer")

// document.writeln("Devices: <br>" + fifo.join(", ") + "<br> <br>")

// document.writeln("Out: <br>" + fifo.shift() + "<br>")
// document.writeln("Out: <br>" + fifo.shift() + "<br>")
// document.writeln("Out: <br>" + fifo.shift() + "<br>")
// document.writeln("Out: <br>" + fifo.shift() + "<br>")

// Question 14

// var lifo = []

// lifo.push("keyboard")
// lifo.push("mouse")
// lifo.push("monitor")
// lifo.push("printer")

// document.writeln("Devices: <br>" + lifo.join(", ") + "<br> <br>")

// document.writeln("Out: <br>" + lifo.pop() + "<br>")
// document.writeln("Out: <br>" + lifo.pop() + "<br>")
// document.writeln("Out: <br>" + lifo.pop() + "<br>")
// document.writeln("Out: <br>" + lifo.pop() + "<br>")

// Question 15

var mobileManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

document.writeln("<select>");
document.writeln("<option>" + mobileManufacturers[0] + "</option>")
document.writeln("<option>" + mobileManufacturers[1] + "</option>")
document.writeln("<option>" + mobileManufacturers[2] + "</option>")
document.writeln("<option>" + mobileManufacturers[3] + "</option>")
document.writeln("<option>" + mobileManufacturers[4] + "</option>")
document.writeln("<option>" + mobileManufacturers[5] + "</option>")
document.writeln("</select>")