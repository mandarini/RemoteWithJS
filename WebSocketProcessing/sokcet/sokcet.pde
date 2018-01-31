  
import processing.net.*;

Client myClient;
int dataIn;

void setup() {
  size(200, 200);
  myClient = new Client(this, "10.16.4.175", 5000);
}

void draw() { }  // Empty draw keeps the program running

// ClientEvent message is generated when the server 
// sends data to an existing client.
void clientEvent(Client someClient) {
  print("Server Says:  ");
  dataIn = myClient.read();
  println(dataIn);
  background(dataIn);
}