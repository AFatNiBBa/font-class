
import { Icon, generic } from "../../index";

/**
 * A component that renders the `swap-arrows` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swap-arrows?s=sharp-duotone-solid swap-arrows}
 * @preview ![swap-arrows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/swap-arrows.svg)
 */
const SwapArrows: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 32l0 32c0 64 0 128 0 192c21.3 0 42.7 0 64 0l0-160 128 0 0 290.7-25.4-25.4L432 338.7 386.7 384l22.6 22.6 80 80L512 509.3l22.6-22.6 80-80L637.3 384 592 338.7l-22.6 22.6L544 386.7 544 64l0-32-32 0L320 32l-32 0z" />
        <path d="M150.6 25.4L128 2.7 105.4 25.4l-80 80L2.7 128 48 173.3l22.6-22.6L96 125.3 96 448l0 32 32 0 192 0 32 0 0-32 0-192-64 0 0 160-128 0 0-290.7 25.4 25.4L208 173.3 253.3 128l-22.6-22.6-80-80z" />
    </Icon>
);

export default SwapArrows;