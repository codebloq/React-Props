import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1>Contacts Page</h1>
      <hr style={{ marginBottom: "30px" }} />
      <Card
        name="Adv. Abc"
        img="https://images.pexels.com/photos/1181663/pexels-photo-1181663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        tel="+123 456 789"
        email="abc@abc.com"
      />
      <Card
        name="Adv. Bcd"
        img="https://images.pexels.com/photos/10070988/pexels-photo-10070988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        tel="+234 567 890"
        email="ads@fav.com"
      />
      <Card
        name="Adv. Dds"
        img="https://images.pexels.com/photos/3059661/pexels-photo-3059661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        tel="+456 789 123"
        email="agw@agh.com"
      />
    </div>
  );
}

export default App;
