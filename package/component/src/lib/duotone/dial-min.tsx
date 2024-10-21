
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dial-min` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-min?s=duotone dial-min}
 * @preview ![dial-min](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dial-min.svg)
 */
const DialMin: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288a32 32 0 1 0 64 0A32 32 0 1 0 0 288zM64 96a32 32 0 1 0 64 0A32 32 0 1 0 64 96zm0 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM256 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM448 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-192a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M192.8 416.7c62.6 46.2 151.3 41 208-15.7c62.5-62.5 62.5-163.8 0-226.3s-163.8-62.5-226.3 0c-56.7 56.7-62 145.4-15.7 208L270.7 270.9c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L192.8 416.7z" />
    </Icon>
);

export default DialMin;