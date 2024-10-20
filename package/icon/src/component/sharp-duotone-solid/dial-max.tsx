
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dial-max` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-max?s=sharp-duotone-solid dial-max}
 * @preview ![dial-max](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dial-max.svg)
 */
const DialMax: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256l0 64 64 0 0-64L0 256zM64 64l0 64 64 0 0-64L64 64zm0 384l0 64 64 0 0-64-64 0zM256 0l0 64 64 0 0-64L256 0zM448 64l0 64 64 0 0-64-64 0zm0 384l0 64 64 0 0-64-64 0zm64-192l0 64 64 0 0-64-64 0z" />
        <path d="M417.1 382.8c46.2-62.6 41-151.3-15.7-208c-62.5-62.5-163.8-62.5-226.3 0s-62.5 163.8 0 226.3c56.7 56.7 145.4 62 208 15.7L271.3 304.9l-17-17 33.9-33.9 17 17L417.1 382.8z" />
    </Icon>
);

export default DialMax;