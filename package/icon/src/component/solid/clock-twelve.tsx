
import { Icon } from "../../index";

/**
 * A component that renders the `clock-twelve` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-twelve?s=solid clock-twelve}
 * @preview ![clock-twelve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/clock-twelve.svg)
 */
const ClockTwelve: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm24-392l0 136c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-136c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default ClockTwelve;