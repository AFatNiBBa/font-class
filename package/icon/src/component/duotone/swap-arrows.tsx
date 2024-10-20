
import { Icon, generic } from "../../index";

/**
 * A component that renders the `swap-arrows` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swap-arrows?s=duotone swap-arrows}
 * @preview ![swap-arrows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/swap-arrows.svg)
 */
const SwapArrows: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 160l0 96 64 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 242.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l96-96c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6c-12.5-12.5-32.8-12.5-45.3 0L544 402.7 544 160c0-70.7-57.3-128-128-128s-128 57.3-128 128z" />
        <path d="M150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 109.3 96 352c0 70.7 57.3 128 128 128s128-57.3 128-128l0-96-64 0 0 96c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-242.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z" />
    </Icon>
);

export default SwapArrows;