
import { Icon } from "../../index";

/**
 * A component that renders the `truck-ramp` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp?s=sharp-thin truck-ramp}
 * @preview ![truck-ramp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/truck-ramp.svg)
 */
const TruckRamp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M360 0l-8 0 0 8 0 388.2L13.9 488.3l-7.7 2.1 4.2 15.4 7.7-2.1 398-108.4c-.1 1.6-.1 3.1-.1 4.7c0 61.9 50.1 112 112 112s112-50.1 112-112s-50.1-112-112-112c-54.4 0-99.7 38.7-109.9 90.1L368 391.8 368 16l264 0 8 0 0-16-8 0L360 0zM528 304a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default TruckRamp;