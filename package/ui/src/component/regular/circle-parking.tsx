
import { Icon } from "../../index";

/**
 * A component that renders the `circle-parking` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-parking?s=regular circle-parking}
 * @preview ![circle-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-parking.svg)
 */
const CircleParking: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm216 16l64 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-64 0 0 96zm64 48l-64 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64 0-136c0-17.7 14.3-32 32-32l80 0c53 0 96 43 96 96s-43 96-96 96z" />
    </Icon>
);

export default CircleParking;