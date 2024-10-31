
import { Icon, generic } from "../../index";

/**
 * A component that renders the `floppy-disk-circle-arrow-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk-circle-arrow-right?s=duotone floppy-disk-circle-arrow-right}
 * @preview ![floppy-disk-circle-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/floppy-disk-circle-arrow-right.svg)
 */
const FloppyDiskCircleArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l242.7 0c17 0 33.3 6.7 45.3 18.7L429.3 128c12 12 18.7 28.3 18.7 45.3l0 19.5c-5.3-.5-10.6-.7-16-.7c-75 0-139.1 47-164.4 113.1C256.1 294.5 240.8 288 224 288c-35.3 0-64 28.7-64 64s28.7 64 64 64c13.3 0 25.7-4.1 35.9-11c6 28.1 18.7 53.7 36.3 75L64 480c-35.3 0-64-28.7-64-64L0 96zm64 32l0 64c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32z" />
        <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm19.3-211.3l56 56c6.2 6.2 6.2 16.4 0 22.6l-56 56c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L457.4 384 368 384c-8.8 0-16-7.2-16-16s7.2-16 16-16l89.4 0-28.7-28.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0z" />
    </Icon>
);

export default FloppyDiskCircleArrowRight;