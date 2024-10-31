
import { Icon } from "../../index";

/**
 * A component that renders the `truck-pickup` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-pickup?s=sharp-light truck-pickup}
 * @preview ![truck-pickup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/truck-pickup.svg)
 */
const TruckPickup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M240 32l-16 0 0 16 0 144L64 192l-32 0 0 32 0 128-16 0L0 352l0 32 16 0 16 0 32 0 16 0c0 53 43 96 96 96s96-43 96-96l96 0c0 53 43 96 96 96s96-43 96-96l16 0 32 0 16 0 16 0 0-32-16 0-16 0 0-128 0-32-32 0-49.9 0-1.5-1.9-120-152L399.8 32 392 32 240 32zM576 224l0 128-21.5 0c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64l-106.9 0c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64L64 352l0-128 512 0zm-90.7-32L256 192l0-128 128.2 0L485.3 192zM112 384a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm352-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default TruckPickup;