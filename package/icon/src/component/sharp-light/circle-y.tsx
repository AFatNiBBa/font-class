
import { Icon } from "../../index";

/**
 * A component that renders the `circle-y` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-y?s=sharp-light circle-y}
 * @preview ![circle-y](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-y.svg)
 */
const CircleY: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM240 293.5l0 90.5 0 16 32 0 0-16 0-90.5L387.8 144l-40.5 0L256 261.9 164.6 144l-40.5 0L240 293.5z" />
    </Icon>
);

export default CircleY;