
import { Icon } from "../../index";

/**
 * A component that renders the `circle-1` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-1?s=sharp-light circle-1}
 * @preview ![circle-1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-1.svg)
 */
const Circle_1: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM196.9 197.3L240 168.6 240 352l-48 0-16 0 0 32 16 0 64 0 64 0 16 0 0-32-16 0-48 0 0-208 0-16-16 0-8 0-4.8 0-4 2.7L184 167.4l0 38.5 12.9-8.6z" />
    </Icon>
);

export default Circle_1;