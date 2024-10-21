
import { Icon } from "../../index";

/**
 * A component that renders the `clock-nine-thirty` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-nine-thirty?s=solid clock-nine-thirty}
 * @preview ![clock-nine-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/clock-nine-thirty.svg)
 */
const ClockNineThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512zm24-120l0-136c0-13.3-10.7-24-24-24l-104 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0 0 112c0 13.3 10.7 24 24 24s24-10.7 24-24z" />
    </Icon>
);

export default ClockNineThirty;