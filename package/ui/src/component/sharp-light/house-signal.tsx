
import { Icon } from "../../index";

/**
 * A component that renders the `house-signal` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-signal?s=sharp-light house-signal}
 * @preview ![house-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/house-signal.svg)
 */
const HouseSignal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 0l10.1 8.2 216 176 12.4 10.1-20.2 24.8L541.9 209 512 184.7l0 212 0 16-16 0-224.4 0c-3.9-11-8.4-21.7-13.5-32l221.9 0 0-222L336 41.3 192 158.6 192 294c-10.1-9-20.7-17.3-32-24.8l0-84.5L130.1 209l-12.4 10.1L97.5 194.3l12.4-10.1 216-176L336 0zM288 172.6l96 0 16 0 0 16 0 96 0 16-16 0-96 0-16 0 0-16 0-96 0-16 16 0zm16 96l64 0 0-64-64 0 0 64zM0 284.6l0-32c141.4 0 256 114.6 256 256l-32 0c0-123.7-100.3-224-224-224zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 64c0-70.7-57.3-128-128-128l0-32c88.4 0 160 71.6 160 160l-32 0z" />
    </Icon>
);

export default HouseSignal;