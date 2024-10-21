
import { Icon, generic } from "../../index";

/**
 * A component that renders the `keyboard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard?s=sharp-duotone-solid keyboard}
 * @preview ![keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/keyboard.svg)
 */
const Keyboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l576 0 0-384L0 64zm64 64l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm96-192l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l256 0 0 64-256 0 0-64zm96-192l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm96-96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm96-96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64z" />
        <path d="M128 128l-64 0 0 64 64 0 0-64zm0 96l-64 0 0 64 64 0 0-64zM64 320l0 64 64 0 0-64-64 0zM224 128l-64 0 0 64 64 0 0-64zm-64 96l0 64 64 0 0-64-64 0zm160-96l-64 0 0 64 64 0 0-64zm-64 96l0 64 64 0 0-64-64 0zm160-96l-64 0 0 64 64 0 0-64zm-64 96l0 64 64 0 0-64-64 0zm160-96l-64 0 0 64 64 0 0-64zm-64 96l0 64 64 0 0-64-64 0zm64 96l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default Keyboard;