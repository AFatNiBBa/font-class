
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-right?s=duotone arrow-down-right}
 * @preview ![arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-down-right.svg)
 */
const ArrowDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 128c0 8.2 3.1 16.4 9.4 22.6L242.7 352l45.3 0 0-45.3L86.6 105.4C80.4 99.1 72.2 96 64 96s-16.4 3.1-22.6 9.4S32 119.8 32 128z" />
        <path d="M352 384c0 17.7-14.3 32-32 32L96 416c-17.7 0-32-14.3-32-32s14.3-32 32-32l192 0 0-192c0-17.7 14.3-32 32-32s32 14.3 32 32l0 224z" />
    </Icon>
);

export default ArrowDownRight;