
import { Icon, generic } from "../../index";

/**
 * A component that renders the `border-top` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-top?s=sharp-duotone-solid border-top}
 * @preview ![border-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/border-top.svg)
 */
const BorderTop: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 128l0 64 64 0 0-64L0 128zm0 96l0 64 64 0 0-64L0 224zm0 96l0 64 64 0 0-64L0 320zm0 96l0 64 64 0 0-64L0 416zM96 224l0 64 64 0 0-64-64 0zm0 192l0 64 64 0 0-64-64 0zm96-288l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm96-192l0 64 64 0 0-64-64 0zm0 192l0 64 64 0 0-64-64 0zm96-288l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0z" />
        <path d="M0 32H448V96H0V32z" />
    </Icon>
);

export default BorderTop;