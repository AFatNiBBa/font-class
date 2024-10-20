
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-ramp` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp?s=sharp-duotone-solid truck-ramp}
 * @preview ![truck-ramp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-ramp.svg)
 */
const TruckRamp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M448 416a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
        <path d="M416.7 402.5C423.4 338.2 477.9 288 544 288c38.2 0 72.5 16.8 96 43.3L640 0 352 0l0 353.8L31.6 441.1 .7 449.5l16.8 61.7 30.9-8.4L416.7 402.5z" />
    </Icon>
);

export default TruckRamp;