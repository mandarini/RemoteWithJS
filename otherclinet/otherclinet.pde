  
// Creates a client that sends input to a server

import processing.net.*; 
Client myClient; 
int clicks;

void setup() { 
  // Connect to the local machine at port 10002.
  // This example will not run if you haven't
  // previously started a server on this port.
  myClient = new Client(this, "10.16.4.175", 5000);
  println(myClient.ip());
  // Say hello
   if (myClient.available() > 0) {
      myClient.write("Hi there");
   }
} 

void mouseReleased() {
  // Count the number of mouse clicks:
  clicks++;
  // Tell the server:
  myClient.write("Mouse pressed " + clicks + " times.\n");
}

void draw() { 
  // Change the background if the mouse is pressed
  if (mousePressed) {
    background(255);
  } else {
    background(0);
  }
} 