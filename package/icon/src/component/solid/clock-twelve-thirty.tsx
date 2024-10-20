
import { Icon } from "../../index";

/**
 * A component that renders the `clock-twelve-thirty` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-twelve-thirty?s=solid clock-twelve-thirty}
 * @preview ![clock-twelve-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/clock-twelve-thirty.svg)
 */
const ClockTwelveThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm24-360l0 240c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-240c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default ClockTwelveThirty;