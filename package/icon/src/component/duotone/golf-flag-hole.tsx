
import { Icon, generic } from "../../index";

/**
 * A component that renders the `golf-flag-hole` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/golf-flag-hole?s=duotone golf-flag-hole}
 * @preview ![golf-flag-hole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/golf-flag-hole.svg)
 */
const GolfFlagHole: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416c0 53 114.6 96 256 96s256-43 256-96s-114.6-96-256-96c-27.9 0-54.8 1.7-80 4.8l0 70.1c11.7-6.6 28.9-10.8 48-10.8c35.3 0 64 14.3 64 32s-28.7 32-64 32c-23.1 0-43.4-6.1-54.6-15.3c-4.4 4.5-10.6 7.3-17.4 7.3c-13.3 0-24-10.7-24-24l0-83.2C51.5 349.4 0 380.5 0 416z" />
        <path d="M139.4 3.6c7.1-4.4 15.9-4.8 23.4-1.1l208 104c8.1 4.1 13.3 12.4 13.3 21.5s-5.1 17.4-13.3 21.5L176 246.8 176 416c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-176c0-1.4 .1-2.7 .3-4c-.2-1.3-.3-2.6-.3-4l0-208c0-8.3 4.3-16 11.4-20.4z" />
    </Icon>
);

export default GolfFlagHole;