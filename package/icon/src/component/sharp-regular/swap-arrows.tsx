
import { Icon } from "../../index";

/**
 * A component that renders the `swap-arrows` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swap-arrows?s=sharp-regular swap-arrows}
 * @preview ![swap-arrows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/swap-arrows.svg)
 */
const SwapArrows: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 6.1l17 17 88 88 17 17L216 161.9l-17-17-47-47L152 432l144 0 0-376 0-24 24 0 192 0 24 0 0 24 0 156 0 202.1 47-47 17-17L633.9 384l-17 17-88 88-17 17-17-17-88-88-17-17L424 350.1l17 17 47 47L488 212l0-132L344 80l0 376 0 24-24 0-192 0-24 0 0-24 0-358.1L57 145l-17 17L6.1 128l17-17 88-88 17-17z" />
    </Icon>
);

export default SwapArrows;