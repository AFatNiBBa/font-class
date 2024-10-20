
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dial-max` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-max?s=duotone dial-max}
 * @preview ![dial-max](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dial-max.svg)
 */
const DialMax: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288a32 32 0 1 0 64 0A32 32 0 1 0 0 288zM64 96a32 32 0 1 0 64 0A32 32 0 1 0 64 96zm0 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM256 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM448 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-192a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M417.1 382.8c46.2-62.6 41-151.3-15.7-208c-62.5-62.5-163.8-62.5-226.3 0s-62.5 163.8 0 226.3c56.7 56.7 145.4 62 208 15.7L271.3 304.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L417.1 382.8z" />
    </Icon>
);

export default DialMax;