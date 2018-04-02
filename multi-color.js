
/* background(r,g,b,c,v) is a function that will make
 * the body's color constantly change, it will transition
 * between 6 colors:
 * 1) Blue
 * 2) Purple
 * 3) Red
 * 4) Orange
 * 5) Yellow
 * 6) Green
 * 
 * background(r,g,b,c,v) will be called once every 20
 * milliseconds
 * @ r -> Red
 * @ g -> green
 * @ b -> blue
 * @ c -> controls the speed of changing the value of a
 * 	 	 few of the colors
 * @ v -> helps the switch statement know which algorithm
 * 		 to use when the function is called
 */

function background(r,g,b,c,v) {
	
	$("body").css('background-color', 'rgb('+r+','+g+','+b+')');
	
	switch (v) {
		case "blue":
			// bring Red down to 60
			// bring Green down to 130
			if (r > 60 || g > 130) {
				if (r > 60) r--;
				// make sure that the green doesnt go down to fast
				if (c == 1) {
					if (g > 130) g--;
					c = 0;
				} else c++;
			} else {
				c = 0;
				v = "purple";
			}
			// make sure that Blue goes up to 255
			if (b < 255) b++; 
			break;
		
		// The rest of the algorithm follows the same idea with
		// a few different implementations of the algorithm
		case "purple":
			if (r < 255 || g > 60) {
				if (r < 255) r++;
				if (c == 1) {
					if (g > 60) g--;
					c = 0;
				} else c++;
			} else {
				c = 0;
				v = "red";
			}
			if (b < 255) b++;
			break;
		
		case "red":
			if (b > 60) b--;
			else v = "orange";
			if (r < 255) r++;
			if (g > 60) g--;
			break;
		
		case "orange":
			if (g < 130) {
				g++;
			} else v = "yellow";
			break;
		
		case "yellow":
			if (g < 255) g++;
			else v = "green";
			break;
		
		case "green":
			if (r > 60 || b < 130) {
				if (r > 60) r--;
				if (c = 1) {
					if (b < 130) b++;
					c = 0;
				} else c++;
			} else {
				c = 0;
				v = "blue";
			}
			break;
		
	}
	
	// recalls background after 20 milliseconds
	// use a value of 1000 to make it change every second
	setTimeout('background('+r+','+g+','+b+', '+c+', \"'+v+'\")', 20);
	
}
