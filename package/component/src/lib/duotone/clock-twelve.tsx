
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-twelve` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-twelve?s=duotone clock-twelve}
 * @preview ![clock-twelve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock-twelve.svg)
 */
const ClockTwelve: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-136z" />
        <path d="M256 96c13.3 0 24 10.7 24 24l0 136c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-136c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default ClockTwelve;