
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-ramp` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp?s=duotone truck-ramp}
 * @preview ![truck-ramp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-ramp.svg)
 */
const TruckRamp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M448 416a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
        <path d="M416.7 402.5C423.4 338.2 477.9 288 544 288c38.2 0 72.5 16.8 96 43.3L640 0 416 0c-35.3 0-64 28.7-64 64l0 289.8L31.6 441.1c-17.1 4.6-27.1 22.2-22.5 39.3s22.2 27.1 39.3 22.5L416.7 402.5z" />
    </Icon>
);

export default TruckRamp;