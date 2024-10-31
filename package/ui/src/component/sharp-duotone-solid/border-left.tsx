
import { Icon, generic } from "../../index";

/**
 * A component that renders the `border-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-left?s=sharp-duotone-solid border-left}
 * @preview ![border-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/border-left.svg)
 */
const BorderLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 32l64 0 0 64L96 96l0-64zm0 192l64 0 0 64-64 0 0-64zm0 192l64 0 0 64-64 0 0-64zM192 32l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zM288 32l64 0 0 64-64 0 0-64zm0 192l64 0 0 64-64 0 0-64zm0 192l64 0 0 64-64 0 0-64zM384 32l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64z" />
        <path d="M0 480L0 32l64 0 0 448L0 480z" />
    </Icon>
);

export default BorderLeft;