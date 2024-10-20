
import { Icon, generic } from "../../index";

/**
 * A component that renders the `golf-flag-hole` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/golf-flag-hole?s=sharp-duotone-solid golf-flag-hole}
 * @preview ![golf-flag-hole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/golf-flag-hole.svg)
 */
const GolfFlagHole: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416c0 53 114.6 96 256 96s256-43 256-96s-114.6-96-256-96c-27.9 0-54.8 1.7-80 4.8l0 67.2 0 2.8c11.7-6.6 28.9-10.8 48-10.8c35.3 0 64 14.3 64 32s-28.7 32-64 32s-64-14.3-64-32l-32 0 0-24 0-59.2C51.5 349.4 0 380.5 0 416z" />
        <path d="M416 128L128 0l0 216 0 24 0 16 0 136 0 24 48 0 0-24 0-152 0-5.3L416 128z" />
    </Icon>
);

export default GolfFlagHole;