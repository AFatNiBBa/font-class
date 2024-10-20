
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-m` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-m?s=sharp-duotone-solid circle-m}
 * @preview ![circle-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-m.svg)
 */
const CircleM: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 128l36.3 0 7.2 9.9L256 255l84.5-117.1 7.2-9.9 36.3 0 0 24 0 208 0 24-48 0 0-24 0-133.8-60.5 83.8L256 337l-19.5-26.9L176 226.2 176 360l0 24-48 0 0-24 0-208 0-24z" />
        <path d="M128 128l0 24 0 208 0 24 48 0 0-24 0-133.8 60.5 83.8L256 337l19.5-26.9L336 226.2 336 360l0 24 48 0 0-24 0-208 0-24-36.3 0-7.2 9.9L256 255 171.5 137.9l-7.2-9.9L128 128z" />
    </Icon>
);

export default CircleM;