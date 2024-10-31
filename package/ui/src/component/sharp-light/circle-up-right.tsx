
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-right?s=sharp-light circle-up-right}
 * @preview ![circle-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-up-right.svg)
 */
const CircleUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm96 144l16 0 0 16 0 160 0 6.6-4.7 4.7-16 16L336 358.6l-11.3-11.3L284 306.6l-64.7 64.7L208 382.6l-11.3-11.3-56-56L129.4 304l11.3-11.3L205.4 228l-40.7-40.7L153.4 176l11.3-11.3 16-16 4.7-4.7 6.6 0 160 0zM336 313.4L336 176l-137.4 0 40.7 40.7L250.6 228l-11.3 11.3L174.6 304 208 337.4l64.7-64.7L284 261.4l11.3 11.3L336 313.4z" />
    </Icon>
);

export default CircleUpRight;