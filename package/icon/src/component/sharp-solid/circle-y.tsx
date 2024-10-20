
import { Icon } from "../../index";

/**
 * A component that renders the `circle-y` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-y?s=sharp-solid circle-y}
 * @preview ![circle-y](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-y.svg)
 */
const CircleY: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 295.9L120.6 144l59.5 0L256 247.4 331.8 144l59.5 0L280 295.9l0 80.1 0 24-48 0 0-24 0-80.1z" />
    </Icon>
);

export default CircleY;