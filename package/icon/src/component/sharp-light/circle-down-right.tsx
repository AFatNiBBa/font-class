
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down-right?s=sharp-light circle-down-right}
 * @preview ![circle-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-down-right.svg)
 */
const CircleDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480a224 224 0 1 1 0-448 224 224 0 1 1 0 448zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zm96 368l16 0 0-16 0-160 0-6.6-4.7-4.7-16-16L336 153.4l-11.3 11.3L284 205.4l-64.7-64.7L208 129.4l-11.3 11.3-56 56L129.4 208l11.3 11.3L205.4 284l-40.7 40.7L153.4 336l11.3 11.3 16 16 4.7 4.7 6.6 0 160 0zM336 198.6L336 336l-137.4 0 40.7-40.7L250.6 284l-11.3-11.3L174.6 208 208 174.6l64.7 64.7L284 250.6l11.3-11.3L336 198.6z" />
    </Icon>
);

export default CircleDownRight;