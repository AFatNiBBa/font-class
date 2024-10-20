
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chalkboard` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard?s=duotone chalkboard}
 * @preview ![chalkboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chalkboard.svg)
 */
const Chalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 448c0 17.7 14.3 32 32 32l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-320c0-35.3-28.7-64-64-64L96 32C60.7 32 32 60.7 32 96l0 320c-17.7 0-32 14.3-32 32zM96 96l384 0 0 320-64 0-192 0L96 416 96 96z" />
        <path d="M480 96L96 96l0 320 128 0 0-32c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 32 64 0 0-320z" />
    </Icon>
);

export default Chalkboard;