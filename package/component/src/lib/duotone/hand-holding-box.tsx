
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-holding-box` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-box?s=duotone hand-holding-box}
 * @preview ![hand-holding-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-holding-box.svg)
 */
const HandHoldingBox: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64c0 17.7 14.3 32 32 32l160 0 160.5 0c29 0 57.3-9.3 80.7-26.5l126.6-93.3c10.6-7.8 16.3-20 16.3-32.2c0-8.2-2.5-16.6-7.8-23.7c-13.1-17.8-38.1-21.6-55.9-8.5L392.6 416 272 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-16 0-78.3 0c-29.1 0-57.3 9.9-80 28L68.8 384 32 384c-17.7 0-32 14.3-32 32z" />
        <path d="M224 0l0 121.7c0 3.5 2.8 6.3 6.3 6.3c1.1 0 2.2-.3 3.1-.8l46.6-26.6c4.9-2.8 11-2.8 15.9 0l46.6 26.6c1 .5 2 .8 3.1 .8c3.5 0 6.3-2.8 6.3-6.3L352 0l80 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48L96 48c0-26.5 21.5-48 48-48l80 0z" />
    </Icon>
);

export default HandHoldingBox;