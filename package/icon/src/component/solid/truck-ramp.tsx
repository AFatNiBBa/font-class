
import { Icon } from "../../index";

/**
 * A component that renders the `truck-ramp` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp?s=solid truck-ramp}
 * @preview ![truck-ramp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/truck-ramp.svg)
 */
const TruckRamp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 400L640 0 416 0c-35.3 0-64 28.7-64 64l0 289.8L31.6 441.1c-17.1 4.6-27.1 22.2-22.5 39.3s22.2 27.1 39.3 22.5L416 402.7C417.5 463.3 467 512 528 512c61.9 0 112-50.1 112-112zM528 352a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default TruckRamp;