
import { Icon } from "../../index";

/**
 * A component that renders the `truck-ramp` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp?s=light truck-ramp}
 * @preview ![truck-ramp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/truck-ramp.svg)
 */
const TruckRamp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M432 0c-44.2 0-80 35.8-80 80l0 304c0 1.3 .2 2.5 .4 3.7L11.8 480.6C3.3 482.9-1.8 491.7 .6 500.2s11.1 13.6 19.6 11.2L416.1 403.6C417.9 463.8 467.3 512 528 512c61.9 0 112-50.1 112-112s-50.1-112-112-112c-51.2 0-94.4 34.4-107.7 81.3l-.5 .1L384 379.1 384 80c0-26.5 21.5-48 48-48l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L432 0zm96 320a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default TruckRamp;