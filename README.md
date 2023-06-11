# Etch-a-Sketch

Index.html - has main container that is grid with 2 columns and inside the container there are 2 more containers
left container(squareOptions) is with functions for right container(squareContainer). Left container has input color
2 buttons(reset and random color) and input range.
Right container has only one div which is container for other divs that are appended with javascript.

App.css - for font family I used 'Comic neue', everything is set to border-box, background color is black while
buttons, inputs, grid and grid text is white. I separated main container content into 2 columns. For left container
I used display flex and flex direction column to set content in vertical and I got content where I wanted with tweaking
margin and padding. For input color I used webkit to remove background color and appearance and make the input circle
like. For buttons I used margin inline to center them and padding for size and added hover effects on both with both of
them being different.
For right container I added h1 as title for square container and for square container I used display grid.

App.js - with input range you can choose how many squares you want for square container to have on range from 1 x 1
to 60 x 60, and also input range text updates with input range value. Input color lets you pick color you want squares to
be when you hover over them. Random color button makes random colors for each square when you hover over them, and reset
button resets both containers to default.
Square container grid is made with for loop that creates elements(div) and appends created divs in square container.
