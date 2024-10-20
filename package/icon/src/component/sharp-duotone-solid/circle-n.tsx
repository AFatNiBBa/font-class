
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-n` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-n?s=sharp-duotone-solid circle-n}
 * @preview ![circle-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-n.svg)
 */
const CircleN: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l36.6 0 7.2 10.3L304 283.2 304 152l0-24 48 0 0 24 0 208 0 24-36.6 0-7.2-10.3L208 228.8 208 360l0 24-48 0 0-24 0-208 0-24z" />
        <path d="M352 128l-48 0 0 24 0 131.2L203.7 138.3 196.6 128 160 128l0 24 0 208 0 24 48 0 0-24 0-131.2L308.3 373.7l7.2 10.3 36.6 0 0-24 0-208 0-24z" />
    </Icon>
);

export default CircleN;