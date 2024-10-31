
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dong-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dong-sign?s=duotone dong-sign}
 * @preview ![dong-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dong-sign.svg)
 */
const DongSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 480c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32zM192 96c0-17.7 14.3-32 32-32l32 0 0 64-32 0c-17.7 0-32-14.3-32-32zM320 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0-64z" />
        <path d="M288 32c-17.7 0-32 14.3-32 32l0 113.1c-18.8-10.9-40.7-17.1-64-17.1c-70.7 0-128 57.3-128 128s57.3 128 128 128c24.5 0 47.4-6.9 66.8-18.8c5 11.1 16.2 18.8 29.2 18.8c17.7 0 32-14.3 32-32l0-96 0-224c0-17.7-14.3-32-32-32zM128 288a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default DongSign;