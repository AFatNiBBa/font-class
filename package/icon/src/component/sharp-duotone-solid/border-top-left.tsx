
import { Icon, generic } from "../../index";

/**
 * A component that renders the `border-top-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-top-left?s=sharp-duotone-solid border-top-left}
 * @preview ![border-top-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/border-top-left.svg)
 */
const BorderTopLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 416l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm96-288l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0z" />
        <path d="M0 480l0-32L0 64 0 32l32 0 384 0 32 0 0 64-32 0L64 96l0 352 0 32L0 480z" />
    </Icon>
);

export default BorderTopLeft;