
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-down-left-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-down-left-right?s=sharp-duotone-solid up-down-left-right}
 * @preview ![up-down-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/up-down-left-right.svg)
 */
const UpDownLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 96l0 32 64 0 0 96 64 0 0-96 64 0 0-32L256 0 160 96zm0 288l0 32 96 96 96-96 0-32-64 0 0-96-64 0 0 96-64 0z" />
        <path d="M96 352L0 256l96-96 32 0 0 64 256 0 0-64 32 0 96 96-96 96-32 0 0-64-256 0 0 64-32 0z" />
    </Icon>
);

export default UpDownLeftRight;