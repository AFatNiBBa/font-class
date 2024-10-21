
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-1-9` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-1-9?s=duotone arrow-down-1-9}
 * @preview ![arrow-down-1-9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-down-1-9.svg)
 */
const ArrowDown_1_9: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M344 336c0 39.2 25.6 72.4 61.1 83.8l-6.8 9.2c-10.5 14.2-7.5 34.2 6.7 44.8s34.2 7.5 44.8-6.7l48.8-65.8c14-18.9 21.5-41.7 21.5-65.2c0-48.6-39.4-88-88-88s-88 39.4-88 88zm8-144c0 17.7 14.3 32 32 32l48 0 48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-96c0-10.3-4.9-19.9-13.3-26s-19.1-7.7-28.8-4.4l-48 16c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l5.9-2 0 51.6-16 0c-17.7 0-32 14.3-32 32zM464 336a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M160 480c9 0 17.5-3.8 23.6-10.4l88-96c11.9-13 11.1-33.3-2-45.2s-33.3-11.1-45.2 2L192 365.7 192 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 301.7L95.6 330.4c-11.9-13-32.2-13.9-45.2-2s-13.9 32.2-2 45.2l88 96C142.5 476.2 151 480 160 480z" />
    </Icon>
);

export default ArrowDown_1_9;