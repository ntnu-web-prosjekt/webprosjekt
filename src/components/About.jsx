import { NavLink } from "react-router-dom";
import "./about/about.scss";
function About() {
  return (
    <div className="about">
      <h1>About this website</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        vehicula sem eget elit vestibulum, nec mollis augue laoreet. Aenean ac
        varius augue, a porttitor mi. Proin tincidunt dolor ut vulputate
        bibendum. Duis sagittis magna et est iaculis, finibus sollicitudin
        lectus euismod. Proin molestie id leo nec iaculis. Praesent eget dictum
        leo, a hendrerit turpis. Curabitur porttitor maximus odio, et aliquet
        erat convallis nec. Curabitur vitae odio sollicitudin, commodo odio
        cursus, varius dui. Fusce ac tempus metus. Vestibulum commodo tincidunt
        tellus, non dignissim metus. Mauris a eros viverra, fringilla metus
        vitae, feugiat enim. Vestibulum a consequat nisi. Cras dolor justo,
        accumsan et dapibus ut, rutrum et diam. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Quisque aliquet
        hendrerit lacinia. Fusce suscipit augue ut laoreet bibendum.
      </p>
      <p>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc
        commodo sem fringilla felis aliquam, nec dignissim dolor lacinia. Donec
        malesuada quam nisl, eu bibendum ex pretium sit amet. Phasellus auctor
        ipsum eget nibh vulputate suscipit. In eu erat facilisis, placerat
        mauris id, porta ligula. Nam tincidunt elementum diam, et ullamcorper
        lacus volutpat sed. Sed nibh sem, sollicitudin vel iaculis in, efficitur
        a nulla. Quisque ac turpis et velit porta scelerisque. Nam blandit justo
        in ligula blandit aliquam. Praesent volutpat urna eu sapien rhoncus
        pellentesque.
      </p>
      <h2>Meet the creators</h2>
      <p className="creators">
        <a target={"_blank"} href="https://github.com/SivertGullbergHansen">
          Sivert Gullberg Hansen
        </a>
        <span className="material-icons">linear_scale</span>
        <a target={"_blank"} href="https://github.com/henriklgntnu">
          Henrik Landgraff Granum
        </a>
        <span className="material-icons">linear_scale</span>
        <a target={"_blank"} href="https://github.com/sivanmah">
          Sivan Sabir Mahmud
        </a>
        <span className="material-icons">linear_scale</span>
        <a target={"_blank"} href="https://github.com/Magnumoe">
          Magnus Moen
        </a>
      </p>
      <NavLink to="/">Go Home</NavLink>
    </div>
  );
}

export default About;
