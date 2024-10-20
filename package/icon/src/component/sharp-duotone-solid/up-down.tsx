
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-down?s=sharp-duotone-solid up-down}
 * @preview ![up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/up-down.svg)
 */
const UpDown: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 32L128 512 256 384l0-32-80 0 0-96-96 0 0 96L0 352z" />
        <path d="M128 0L0 128l0 32 80 0 0 96 96 0 0-96 80 0 0-32L128 0z" />
    </Icon>
);

export default UpDown;