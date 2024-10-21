
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-signal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-signal?s=sharp-duotone-solid mobile-signal}
 * @preview ![mobile-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mobile-signal.svg)
 */
const MobileSignal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L0 64 0 448l0 64 64 0 160 0c0-22 2.5-43.4 7.1-64L64 448 64 64l224 0 0 267c18.2-22.6 39.8-42.3 64-58.5L352 64l0-64L288 0 64 0 0 0zM128 384l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0z" />
        <path d="M304 512c0-114.9 93.1-208 208-208l0-48c-141.4 0-256 114.6-256 256l48 0zm144-32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-80l0-48c-88.4 0-160 71.6-160 160l48 0c0-61.9 50.1-112 112-112z" />
    </Icon>
);

export default MobileSignal;