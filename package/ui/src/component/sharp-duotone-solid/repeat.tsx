
import { Icon, generic } from "../../index";

/**
 * A component that renders the `repeat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/repeat?s=sharp-duotone-solid repeat}
 * @preview ![repeat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/repeat.svg)
 */
const Repeat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 416l96 96 32 0 0-64 288 0 32 0 0-32 0-128 0-32-64 0 0 32 0 96-256 0 0-64-32 0L64 416z" />
        <path d="M0 96L0 224l0 32 64 0 0-32 0-96 256 0 0 64 32 0 96-96L352 0 320 0l0 64L32 64 0 64 0 96z" />
    </Icon>
);

export default Repeat;