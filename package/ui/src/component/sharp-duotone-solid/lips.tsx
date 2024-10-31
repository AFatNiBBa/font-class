
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lips` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lips?s=sharp-duotone-solid lips}
 * @preview ![lips](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lips.svg)
 */
const Lips: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 224l64 0s80 96 224 96s224-96 224-96l64 0s-80 224-240 224l-96 0C80 448 0 224 0 224z" />
        <path d="M192 64L0 224l64 0 144-32s48.1 16 80 16s80-16 80-16l144 32 64 0L384 64l-96 48L192 64z" />
    </Icon>
);

export default Lips;