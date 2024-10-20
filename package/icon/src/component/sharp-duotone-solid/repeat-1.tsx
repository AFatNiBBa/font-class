
import { Icon, generic } from "../../index";

/**
 * A component that renders the `repeat-1` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/repeat-1?s=sharp-duotone-solid repeat-1}
 * @preview ![repeat-1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/repeat-1.svg)
 */
const Repeat_1: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 96 0 224l0 32 64 0 0-32 0-96 256 0 0 64 32 0 96-96L352 0 320 0l0 64L32 64 0 64zM64 416l96 96 32 0 0-64 288 0 32 0 0-32 0-128 0-32-64 0 0 32 0 96-256 0 0-64-32 0L64 416z" />
        <path d="M216 192l24 0 24 0 24 0 0 24 0 80 0 24-48 0 0-24 0-56-24 0 0-48z" />
    </Icon>
);

export default Repeat_1;