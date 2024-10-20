
import { Icon } from "../../index";

/**
 * A component that renders the `circle-parking` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-parking?s=sharp-solid circle-parking}
 * @preview ![circle-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-parking.svg)
 */
const CircleParking: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM200 128l80 0c53 0 96 43 96 96l0 32-5.5 0c-13.2 37.3-48.7 64-90.5 64l-48 0 0 32 0 32-64 0 0-32 0-32 0-64 0-96 0-32 32 0zm112 96c0-17.7-14.3-32-32-32l-48 0 0 64 48 0c17.7 0 32-14.3 32-32z" />
    </Icon>
);

export default CircleParking;