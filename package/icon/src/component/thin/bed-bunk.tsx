
import { Icon } from "../../index";

/**
 * A component that renders the `bed-bunk` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-bunk?s=thin bed-bunk}
 * @preview ![bed-bunk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bed-bunk.svg)
 */
const BedBunk: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8L0 200 0 439.7 0 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56.3 200 0 344 0 0 56.3c0 4.4 3.6 8 8 8s8-3.6 8-8l0-64.3L576 280l0-80 0-64c0-57.4-46.6-104-104-104L232 32c-13.3 0-24 10.7-24 24l0 136L16 192 16 8zM208 296l0 135.7-192 0L16 208l200 0 344 0 0 64-328 0c-13.3 0-24 10.7-24 24zM560 136l0 56-336 0 0-136c0-4.4 3.6-8 8-8l240 0c48.6 0 88 39.4 88 88zM232 288l328 0 0 143.7-336 0L224 296c0-4.4 3.6-8 8-8zM112 48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0 128a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default BedBunk;