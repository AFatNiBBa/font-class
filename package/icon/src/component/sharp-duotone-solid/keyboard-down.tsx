
import { Icon, generic } from "../../index";

/**
 * A component that renders the `keyboard-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard-down?s=sharp-duotone-solid keyboard-down}
 * @preview ![keyboard-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/keyboard-down.svg)
 */
const KeyboardDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L576 0l0 288L0 288 0 0zM64 64l0 64 64 0 0-64L64 64zm0 96l0 64 64 0 0-64-64 0zm96-96l0 64 64 0 0-64-64 0zm0 96l0 64 256 0 0-64-256 0zm96-96l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0z" />
        <path d="M128 64L64 64l0 64 64 0 0-64zm0 96l-64 0 0 64 64 0 0-64zm320 0l0 64 64 0 0-64-64 0zM224 64l-64 0 0 64 64 0 0-64zm32 0l0 64 64 0 0-64-64 0zm160 0l-64 0 0 64 64 0 0-64zm32 0l0 64 64 0 0-64-64 0zM160 352l0 32L288 512 416 384l0-32-256 0z" />
    </Icon>
);

export default KeyboardDown;