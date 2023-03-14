
What does the example do? 
Starting point --> blue and grey lines come out
- Multiple grey lines
	-  1 short grey and point end
	- 1 long grey, maybe point? goes off screen
- Long blue 
	- creates point right in front of line -> hits it and redirects
	- hits some of same points that grey created going other way
	- 
- Everything moves up off of the screen
	- Everything = "next" in the program

- blue points array, grey points array
- blue continuous line
- grey offspring lines 
- Greys come out after blue line hits a vertex

1. Look into the layout tree -> make a tree
2. figure out what line 77 is doing? what color?
3. figure out why 108 when divide by less, speed goes slower?

current = (current + ids[0]) % signals.length;
- if 1st vertex --> 0+1 % signals.length = 1 = local current in function
- if 2nd vertex --> 1+1 % signals.length = 2 = local current in function
