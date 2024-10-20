
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scroll` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scroll?s=sharp-duotone-solid scroll}
 * @preview ![scroll](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/scroll.svg)
 */
const Scroll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 32l352 0c35.3 0 64 28.7 64 64l0 256-192 0 0 48c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-240 0-64c0-35.3-28.7-64-64-64z" />
        <path d="M128 96l0 64L0 160 0 96C0 60.7 28.7 32 64 32s64 28.7 64 64zM288 400l0-48 288 0 0 32c0 53-43 96-96 96l-272 0c44.2 0 80-35.8 80-80z" />
    </Icon>
);

export default Scroll;