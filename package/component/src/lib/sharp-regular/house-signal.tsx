
import { Icon } from "../../index";

/**
 * A component that renders the `house-signal` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-signal?s=sharp-regular house-signal}
 * @preview ![house-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/house-signal.svg)
 */
const HouseSignal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 1.3l15 12 200 160 18.7 15-30 37.5-18.7-15-9-7.2L512 392l0 24-24 0-216.4 0c-5.9-16.8-13.4-32.8-22.1-48L464 368l0-202.9L336 62.7 208 165.1l0 147.7c-14.5-15.1-30.6-28.6-48-40.3l0-69-9 7.2-18.7 15-30-37.5 18.7-15 200-160 15-12zM384 192l0 96-96 0 0-96 96 0zM0 304l0-48c141.4 0 256 114.6 256 256l-48 0c0-114.9-93.1-208-208-208zM32 448a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm80 64c0-61.9-50.1-112-112-112l0-48c88.4 0 160 71.6 160 160l-48 0z" />
    </Icon>
);

export default HouseSignal;