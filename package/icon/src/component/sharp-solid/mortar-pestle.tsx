
import { Icon } from "../../index";

/**
 * A component that renders the `mortar-pestle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mortar-pestle?s=sharp-solid mortar-pestle}
 * @preview ![mortar-pestle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mortar-pestle.svg)
 */
const MortarPestle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M469.5 0L252.3 160l144.9 0L510.1 47.2 469.5 0zM32 192L0 192l0 64 32 0c0 82.5 43.4 147.7 123.9 176.2C138.4 454.1 128 481.8 128 512l256 0c0-30.2-10.4-57.9-27.9-79.8C436.6 403.7 480 338.5 480 256l32 0 0-64-32 0L32 192z" />
    </Icon>
);

export default MortarPestle;