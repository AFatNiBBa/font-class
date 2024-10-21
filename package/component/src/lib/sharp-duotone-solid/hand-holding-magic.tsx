
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-holding-magic` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-magic?s=sharp-duotone-solid hand-holding-magic}
 * @preview ![hand-holding-magic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-holding-magic.svg)
 */
const HandHoldingMagic: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 384L0 512l32 0 192 0 160 0 12.4 0 10.2-7 128-88 33-22.7-45.3-65.9-33 22.7-94.5 65L256 416l0-32 32 0 64 0 32 0 0-64-32 0-64 0-64 0-64 0-11.2 0-8.8 7L68.8 384 0 384z" />
        <path d="M208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 32 0 0 64-32 0-80 0c-44.2 0-80-35.8-80-80s35.8-80 80-80L320 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0 0 32-64 0 0-32 0-32 0-32 32 0 64 0c35.3 0 64-28.7 64-64s-28.7-64-64-64L208 64z" />
    </Icon>
);

export default HandHoldingMagic;