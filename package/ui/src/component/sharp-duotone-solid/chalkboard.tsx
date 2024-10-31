
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chalkboard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard?s=sharp-duotone-solid chalkboard}
 * @preview ![chalkboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chalkboard.svg)
 */
const Chalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64 32 0 512 0 32 0 0-64-32 0 0-352 0-32-32 0L64 32 32 32l0 32 0 352L0 416zM96 96l384 0 0 320-64 0-192 0L96 416 96 96z" />
        <path d="M480 96L96 96l0 320 128 0 0-64 192 0 0 64 64 0 0-320z" />
    </Icon>
);

export default Chalkboard;