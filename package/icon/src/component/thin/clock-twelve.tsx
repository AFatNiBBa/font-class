
import { Icon } from "../../index";

/**
 * A component that renders the `clock-twelve` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-twelve?s=thin clock-twelve}
 * @preview ![clock-twelve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/clock-twelve.svg)
 */
const ClockTwelve: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM264 104l0 152c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-152c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default ClockTwelve;