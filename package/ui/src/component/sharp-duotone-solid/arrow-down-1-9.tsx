
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-1-9` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-1-9?s=sharp-duotone-solid arrow-down-1-9}
 * @preview ![arrow-down-1-9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-1-9.svg)
 */
const ArrowDown_1_9: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M344 336c0-48.6 39.4-88 88-88s88 39.4 88 88c0 22.6-6.2 44.8-18 64.1L453.5 480l-74.9 0 10.1-16.6 25.1-41.3C373.9 413.7 344 378.3 344 336zm8-304l32 0 48 0 32 0 0 32 0 96 16 0 32 0 0 64-32 0-48 0-48 0-32 0 0-64 32 0 16 0 0-64-16 0-32 0 0-64zm48 304a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M160 480l23.6-25.7 88-96 21.6-23.6L246 291.4 224.4 315 192 350.4l0-285.7 0-32-64 0 0 32 0 285.7L95.6 315 74 291.4 26.8 334.7l21.6 23.6 88 96L160 480z" />
    </Icon>
);

export default ArrowDown_1_9;