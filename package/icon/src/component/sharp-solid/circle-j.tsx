
import { Icon } from "../../index";

/**
 * A component that renders the `circle-j` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-j?s=sharp-solid circle-j}
 * @preview ![circle-j](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-j.svg)
 */
const CircleJ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm80-360l0 136c0 53-43 96-96 96s-96-43-96-96l0-8 0-24 48 0 0 24 0 8c0 26.5 21.5 48 48 48s48-21.5 48-48l0-136 0-24 48 0 0 24z" />
    </Icon>
);

export default CircleJ;