
import { Icon } from "../../index";

/**
 * A component that renders the `circle-i` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-i?s=sharp-solid circle-i}
 * @preview ![circle-i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-i.svg)
 */
const CircleI: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128l72 0 72 0 24 0 0 48-24 0-48 0 0 160 48 0 24 0 0 48-24 0-48 0-48 0-48 0-24 0 0-48 24 0 48 0 0-160-48 0-24 0 0-48 24 0z" />
    </Icon>
);

export default CircleI;