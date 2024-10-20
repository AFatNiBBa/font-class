
import { Icon, generic } from "../../index";

/**
 * A component that renders the `keyboard-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard-left?s=sharp-duotone-solid keyboard-left}
 * @preview ![keyboard-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/keyboard-left.svg)
 */
const KeyboardLeft: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 64l0 384 480 0 0-384L160 64zm64 64l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm96-192l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l160 0 0 64-160 0 0-64zm96-192l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm96-96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64z" />
        <path d="M224 128l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm64 96l-64 0 0 64 64 0 0-64zm32-192l0 64 64 0 0-64-64 0zm64 96l-64 0 0 64 64 0 0-64zm32-96l0 64 64 0 0-64-64 0zm64 96l-64 0 0 64 64 0 0-64zm32-96l0 64 64 0 0-64-64 0zm64 96l-64 0 0 64 64 0 0-64zm-64 96l0 64 64 0 0-64-64 0zM0 256l96 96 32 0 0-192-32 0L0 256z" />
    </Icon>
);

export default KeyboardLeft;