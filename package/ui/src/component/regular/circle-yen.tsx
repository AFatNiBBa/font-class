
import { Icon } from "../../index";

/**
 * A component that renders the `circle-yen` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-yen?s=regular circle-yen}
 * @preview ![circle-yen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-yen.svg)
 */
const CircleYen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM159.9 150.2c9.8-8.9 25-8.2 33.9 1.6L256 220.3l62.2-68.5c8.9-9.8 24.1-10.5 33.9-1.6s10.5 24.1 1.6 33.9L288.4 256l31.6 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-40 0 0 32 40 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-40 0 0 25c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-25-40 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l40 0 0-32-40 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l31.6 0-65.3-71.9c-8.9-9.8-8.2-25 1.6-33.9z" />
    </Icon>
);

export default CircleYen;