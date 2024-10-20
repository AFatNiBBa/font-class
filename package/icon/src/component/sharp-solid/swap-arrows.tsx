
import { Icon } from "../../index";

/**
 * A component that renders the `swap-arrows` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swap-arrows?s=sharp-solid swap-arrows}
 * @preview ![swap-arrows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/swap-arrows.svg)
 */
const SwapArrows: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 2.7l22.6 22.6 80 80L253.3 128 208 173.3l-22.6-22.6L160 125.3 160 416l128 0 0-352 0-32 32 0 192 0 32 0 0 32 0 322.7 25.4-25.4L592 338.7 637.3 384l-22.6 22.6-80 80L512 509.3l-22.6-22.6-80-80L386.7 384 432 338.7l22.6 22.6L480 386.7 480 96 352 96l0 352 0 32-32 0-192 0-32 0 0-32 0-322.7L70.6 150.6 48 173.3 2.7 128l22.6-22.6 80-80L128 2.7z" />
    </Icon>
);

export default SwapArrows;