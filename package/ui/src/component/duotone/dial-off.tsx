
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dial-off` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-off?s=duotone dial-off}
 * @preview ![dial-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dial-off.svg)
 */
const DialOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288a32 32 0 1 0 64 0A32 32 0 1 0 0 288zM64 96a32 32 0 1 0 64 0A32 32 0 1 0 64 96zm0 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM256 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM448 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-192a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M312 446.2c77-11.6 136-78 136-158.2c0-88.4-71.6-160-160-160s-160 71.6-160 160c0 80.2 59 146.6 136 158.2L264 288c0-13.3 10.7-24 24-24s24 10.7 24 24l0 158.2z" />
    </Icon>
);

export default DialOff;