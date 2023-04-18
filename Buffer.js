//Creating a Buffer
var buf = new Buffer(10);
var b = new Buffer([1,2,3,4,5]);
var bb = new Buffer("Simple" , "utf-8");


//Writing a Buffer
// syntax -  buf.write(string[,offset][,length][, encoding])
//Example-1

buf = new Buffer(256);
len = buf.write("Simply");
console.log("Output is" + len);//Output is 6

//Reading a Buffer
// syntax - buf.toString([encoding][, start][, end])
//Example -1
buf = new Buffer(26);
for (var i =0 ; i < 26 ; i++){
    bud[i] = i+97;
}

console.log( buf.toString('anscii')); // output - abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('anscii' , 0 , 5));// output - abcde
console.log( buf.toString('utf8', 0, 5)); // output - abcde
console.log( buf.toString(undefined , 0 , 5)); // encoding default to utf-8 , output - abcde


// Convert Bufer to JSON
// Syntax - buf.toJSON()
//Example 

var buf = new Buffer ('Simply Easy Learning');
var json = buf.toJSON(buf);
console.log(json);
/* output -
{ type: 'Buffer',
   data: 
   [ 
      83,
      105,
      109,
      112,
      108,
      121,
      32,
      69,
      97,
      115,
      121,
      32,
      76,
      101,
      97,
      114,
      110,
      105,
      110,
      103 
   ]
}
*/

// Concatenate Buffers
// Syntax - Buffer.concat(list[, totalLength])
//Example-
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simple Easy Learning');
var buffer3 = Buffer.concat ([buffer1 , buffer2]);

console.log(buffer3.toString);// output - TutorialPoint Simple Easy Learning

//Compare Buffers
// Syntax - bufferWhichisBase.compare(otherBuffer)
//Example -

var buffer1 = new Buffer('ABCD');
var buffer2 = new Buffer('ABCDE');
var result = buffer1.compare(buffer2);

if(result < 0) {
    console.log(buffer1 +" comes before " + buffer2);
 } else if(result === 0) {
    console.log(buffer1 +" is same as " + buffer2);
 } else {
    console.log(buffer1 +" comes after " + buffer2);
 }

 //output - ABCD comes before ABCDE

 //Copy Buffer
 //Syntax - buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd]);
//Example -

var buffer1 = new Buffer('ABC');

var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log(buffer2.toString());// output - ABC

//Slice Buffer
//syntax - buf.slice([start][, end])
//Example-
var buffer1 = new Buffer('TutorialsPoint');

var buffer2 = buffer1.slice(0,9);
console.log(buffer2.toString());// output - Tutorials

//Buffer Length
//synatx - buf.length
//Example -

var buffer1 = new Buffer('TutorialsPoint');

console.log(buffer1.length); // 14
