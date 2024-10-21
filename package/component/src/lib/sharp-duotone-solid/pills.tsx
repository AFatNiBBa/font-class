
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pills` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pills?s=sharp-duotone-solid pills}
 * @preview ![pills](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pills.svg)
 */
const Pills: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 144l0 80 0 32 32 0 160 0 32 0 0-32 0-80c0-61.9-50.1-112-112-112S0 82.1 0 144zM256 320c0 88.4 71.6 160 160 160c38.4 0 73.7-13.5 101.3-36.1L292.1 218.7C269.5 246.3 256 281.6 256 320zm58.7-123.9L539.9 421.3C562.5 393.7 576 358.4 576 320c0-88.4-71.6-160-160-160c-38.4 0-73.7 13.5-101.3 36.1z" />
        <path d="M32 256L0 256l0 32 0 80c0 61.9 50.1 112 112 112s112-50.1 112-112l0-80 0-32-32 0L32 256z" />
    </Icon>
);

export default Pills;