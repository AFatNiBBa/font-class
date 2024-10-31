
import { Icon } from "../../index";

/**
 * A component that renders the `circle-v` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-v?s=sharp-light circle-v}
 * @preview ![circle-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-v.svg)
 */
const CircleV: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM125.2 144L241.5 390.8l4.3 9.2 20.3 0 4.3-9.2L386.8 144l-35.4 0L256 346.5 160.5 144l-35.4 0z" />
    </Icon>
);

export default CircleV;