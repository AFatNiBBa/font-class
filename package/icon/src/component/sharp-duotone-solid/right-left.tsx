
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-left?s=sharp-duotone-solid right-left}
 * @preview ![right-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/right-left.svg)
 */
const RightLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384L128 256l32 0 0 96 320 0 32 0 0 64-32 0-320 0 0 96-32 0L0 384z" />
        <path d="M512 128L384 0 352 0l0 96L32 96 0 96l0 64 32 0 320 0 0 96 32 0L512 128z" />
    </Icon>
);

export default RightLeft;