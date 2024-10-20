
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-signal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-signal?s=sharp-duotone-solid house-signal}
 * @preview ![house-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/house-signal.svg)
 */
const HouseSignal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 208L336 0 576 208l0 48-64 0 0 160-240.4 0C242.7 334.2 177.8 269.3 96 240.4L96 208zm192-16l0 96 96 0 0-96-96 0z" />
        <path d="M208 512c0-114.9-93.1-208-208-208l0-48c141.4 0 256 114.6 256 256l-48 0zM0 480a32 32 0 1 1 64 0A32 32 0 1 1 0 480zm0-80l0-48c88.4 0 160 71.6 160 160l-48 0c0-61.9-50.1-112-112-112z" />
    </Icon>
);

export default HouseSignal;