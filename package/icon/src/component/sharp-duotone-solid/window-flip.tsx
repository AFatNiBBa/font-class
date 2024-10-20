
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window-flip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-flip?s=sharp-duotone-solid window-flip}
 * @preview ![window-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/window-flip.svg)
 */
const WindowFlip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l512 0 0 256L0 480 0 224zM288 96l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64z" />
        <path d="M0 32l512 0 0 192L0 224 0 32zM384 96l0 64 64 0 0-64-64 0zm-32 0l-64 0 0 64 64 0 0-64zM192 96l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default WindowFlip;