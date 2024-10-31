
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-9-1` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-9-1?s=sharp-duotone-solid arrow-up-9-1}
 * @preview ![arrow-up-9-1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-9-1.svg)
 */
const ArrowUp_9_1: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M344 120c0-48.6 39.4-88 88-88s88 39.4 88 88c0 22.6-6.2 44.8-18 64.1L458.3 256l-74.9 0 5.2-8.6 25.1-41.3C373.9 197.7 344 162.3 344 120zm8 168l32 0 48 0 32 0 0 32 0 96 16 0 32 0 0 64-32 0-48 0-48 0-32 0 0-64 32 0 16 0 0-64-16 0-32 0 0-64zm48-168a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M160 32.6l23.6 25.7 88 96L293.2 178 246 221.2l-21.6-23.6L192 162.3 192 448l0 32-64 0 0-32 0-285.7L95.6 197.6 74 221.2 26.8 178l21.6-23.6 88-96L160 32.6z" />
    </Icon>
);

export default ArrowUp_9_1;