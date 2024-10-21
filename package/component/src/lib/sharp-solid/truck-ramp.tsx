
import { Icon } from "../../index";

/**
 * A component that renders the `truck-ramp` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp?s=sharp-solid truck-ramp}
 * @preview ![truck-ramp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/truck-ramp.svg)
 */
const TruckRamp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 400L640 0 352 0l0 352.1L31.4 441.2 .6 449.7l17.1 61.7 30.8-8.6L416 400.7c.4 61.5 50.4 111.3 112 111.3c61.9 0 112-50.1 112-112zM528 352a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default TruckRamp;