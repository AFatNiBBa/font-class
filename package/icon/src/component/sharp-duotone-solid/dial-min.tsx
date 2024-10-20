
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dial-min` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-min?s=sharp-duotone-solid dial-min}
 * @preview ![dial-min](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dial-min.svg)
 */
const DialMin: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256l0 64 64 0 0-64L0 256zM64 64l0 64 64 0 0-64L64 64zm0 384l0 64 64 0 0-64-64 0zM256 0l0 64 64 0 0-64L256 0zM448 64l0 64 64 0 0-64-64 0zm0 384l0 64 64 0 0-64-64 0zm64-192l0 64 64 0 0-64-64 0z" />
        <path d="M192.8 416.7c62.6 46.2 151.3 41 208-15.7c62.5-62.5 62.5-163.8 0-226.3s-163.8-62.5-226.3 0c-56.7 56.7-62 145.4-15.7 208L270.7 270.9l17-17 33.9 33.9-17 17L192.8 416.7z" />
    </Icon>
);

export default DialMin;