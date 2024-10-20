
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-left?s=sharp-solid circle-up-left}
 * @preview ![circle-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-up-left.svg)
 */
const CircleUpLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 320l0-160 160 0 24 24-52 52 76 76-56 56-76-76-52 52-24-24z" />
    </Icon>
);

export default CircleUpLeft;