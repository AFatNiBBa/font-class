
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-a-z` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-a-z?s=sharp-duotone-solid arrow-up-a-z}
 * @preview ![arrow-up-a-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-a-z.svg)
 */
const ArrowUpAZ: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M292.8 256l70.4 0 14.7-32 76.3 0 14.7 32 70.4 0-6.1-13.3-88-192L436.5 32l-41.1 0-8.6 18.7-88 192L292.8 256zM320 288l0 64 32 0 52 0-73 63.9L320 425.5l0 14.5 0 8 0 32 32 0 128 0 32 0 0-64-32 0-52 0 73-63.9 10.9-9.6 0-14.5 0-8 0-32-32 0-128 0-32 0zm79.9-112L416 140.8 432.1 176l-32.3 0z" />
        <path d="M160 32.6l23.6 25.7 88 96L293.2 178 246 221.2l-21.6-23.6L192 162.3 192 448l0 32-64 0 0-32 0-285.7L95.6 197.6 74 221.2 26.8 178l21.6-23.6 88-96L160 32.6z" />
    </Icon>
);

export default ArrowUpAZ;