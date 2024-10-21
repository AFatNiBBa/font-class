
import { Icon } from "../../index";

/**
 * A component that renders the `house-signal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-signal?s=sharp-solid house-signal}
 * @preview ![house-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house-signal.svg)
 */
const HouseSignal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 0L96 208l0 32.4c81.8 28.9 146.7 93.8 175.6 175.6L512 416l0-160 64 0 0-48L336 0zM288 192l96 0 0 96-96 0 0-96zM0 304c114.9 0 208 93.1 208 208l48 0C256 370.6 141.4 256 0 256l0 48zM32 512a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm80 0l48 0c0-88.4-71.6-160-160-160l0 48c61.9 0 112 50.1 112 112z" />
    </Icon>
);

export default HouseSignal;