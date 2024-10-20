
import { Icon, generic } from "../../index";

/**
 * A component that renders the `border-none` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-none?s=sharp-duotone-solid border-none}
 * @preview ![border-none](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/border-none.svg)
 */
const BorderNone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64 64 0 0-64L0 416zm96 64l64 0 0-64-64 0 0 64zM96 96l64 0 0-64L96 32l0 64zm0 128l0 64 64 0 0-64-64 0zM288 480l64 0 0-64-64 0 0 64zm0-448l0 64 64 0 0-64-64 0zm0 256l64 0 0-64-64 0 0 64zM192 416l0 64 64 0 0-64-64 0zm0-320l64 0 0-64-64 0 0 64zm0 128l0 64 64 0 0-64-64 0zM384 480l64 0 0-64-64 0 0 64zm0-384l64 0 0-64-64 0 0 64zM0 32L0 96l64 0 0-64L0 32zM384 288l64 0 0-64-64 0 0 64zM0 224l0 64 64 0 0-64L0 224zM192 384l64 0 0-64-64 0 0 64zm192-64l0 64 64 0 0-64-64 0zM0 384l64 0 0-64L0 320l0 64zM384 128l0 64 64 0 0-64-64 0zM0 192l64 0 0-64L0 128l0 64zm192-64l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default BorderNone;