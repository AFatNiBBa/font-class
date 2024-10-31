
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-holding-magic` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-magic?s=duotone hand-holding-magic}
 * @preview ![hand-holding-magic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-holding-magic.svg)
 */
const HandHoldingMagic: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64c0 17.7 14.3 32 32 32l160 0 160.5 0c29 0 57.3-9.3 80.7-26.5l126.6-93.3c10.6-7.8 16.3-20 16.3-32.2c0-8.2-2.5-16.6-7.8-23.7c-13.1-17.8-38.1-21.6-55.9-8.5L392.6 416 272 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-16 0-78.3 0c-29.1 0-57.3 9.9-80 28L68.8 384 32 384c-17.7 0-32 14.3-32 32z" />
        <path d="M208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-80 0c-44.2 0-80-35.8-80-80s35.8-80 80-80L320 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l64 0c35.3 0 64-28.7 64-64s-28.7-64-64-64L208 64z" />
    </Icon>
);

export default HandHoldingMagic;