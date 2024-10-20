
import { Icon } from "../../index";

/**
 * A component that renders the `swap-arrows` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swap-arrows?s=solid swap-arrows}
 * @preview ![swap-arrows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/swap-arrows.svg)
 */
const SwapArrows: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M105.4 9.4c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L160 109.3 160 352c0 35.3 28.7 64 64 64s64-28.7 64-64l0-192c0-70.7 57.3-128 128-128s128 57.3 128 128l0 242.7 41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L480 402.7 480 160c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 192c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-242.7L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96z" />
    </Icon>
);

export default SwapArrows;