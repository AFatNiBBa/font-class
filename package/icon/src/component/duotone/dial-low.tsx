
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dial-low` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-low?s=duotone dial-low}
 * @preview ![dial-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dial-low.svg)
 */
const DialLow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288a32 32 0 1 0 64 0A32 32 0 1 0 0 288zM64 96a32 32 0 1 0 64 0A32 32 0 1 0 64 96zm0 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM256 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM448 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-192a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M129.4 311.6c11.6 77 78 136 158.2 136c88.4 0 160-71.6 160-160s-71.6-160-160-160c-80.2 0-146.6 59-158.2 136l158.2 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-158.2 0z" />
    </Icon>
);

export default DialLow;