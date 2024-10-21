
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-a-z` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-a-z?s=sharp-duotone-solid arrow-down-a-z}
 * @preview ![arrow-down-a-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-a-z.svg)
 */
const ArrowDownAZ: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M292.8 256l70.4 0 14.7-32 76.3 0 14.7 32 70.4 0-6.1-13.3-88-192L436.5 32l-41.1 0-8.6 18.7-88 192L292.8 256zM320 288l0 64 32 0 52 0-73 63.9L320 425.5l0 14.5 0 8 0 32 32 0 128 0 32 0 0-64-32 0-52 0 73-63.9 10.9-9.6 0-14.5 0-8 0-32-32 0-128 0-32 0zm79.9-112L416 140.8 432.1 176l-32.3 0z" />
        <path d="M160 480l23.6-25.7 88-96 21.6-23.6L246 291.4 224.4 315 192 350.4l0-285.7 0-32-64 0 0 32 0 285.7L95.6 315 74 291.4 26.8 334.7l21.6 23.6 88 96L160 480z" />
    </Icon>
);

export default ArrowDownAZ;