# binary clock

My first "Hello World" application using reactjs. The project uses webpack and babeljs for compiling ES6 code into ES5.

This application is highly influenced by the *BCD minimalist* pebble watch face by *Morris*.

## How to read time

The time is presented in HHMMSS format, where two and two columns represent each part of the time.
The left column in the pair is the upper 10 of the value. Example: 1 in 17. The right column, the lower part; 7.

Each box represent a bitmask 0x0000. If the value is 0, no bits are highlighted, the first row is 1 then 2, 4 and 8.
You sum the the highlighted boxes to get the column value.
