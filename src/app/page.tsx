import About from "./components/about/page";
import BuyNow from "./components/contact/page";
import Hero from "./components/hero/page";
import Alarm from "./components/items/alarm/page";
import Smart from "./components/items/smart/page";
import Wall from "./components/items/wall/page";
import Wrist from "./components/items/wrist/page";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Wrist/>
      <Smart/>
      <Alarm/>
      <Wall/>
      <About/>
      <BuyNow/>
    </div>
  );
}
