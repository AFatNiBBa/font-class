
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down-left?s=sharp-regular circle-down-left}
 * @preview ![circle-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-down-left.svg)
 */
const CircleDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416zm0 464A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM160 192l24-24 52 52 76-76 56 56-76 76 52 52-24 24-160 0 0-160z" />
    </Icon>
);

export default CircleDownLeft;