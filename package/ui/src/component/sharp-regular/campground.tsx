
import { Icon } from "../../index";

/**
 * A component that renders the `campground` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/campground?s=sharp-regular campground}
 * @preview ![campground](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/campground.svg)
 */
const Campground: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M377.8 38.5L362.4 56.9l-43.2 51.9L562.4 401l5.6 6.7 0 8.7 0 71.6 0 24-24 0-232 0-24 0-24 0L32 512 8 512l0-24 0-71.6 0-8.7 5.6-6.7L256.8 108.8 213.6 56.9 198.2 38.5 235.1 7.8l15.4 18.4L288 71.3l37.6-45.1L340.9 7.8l36.9 30.7zM56 425l0 39 70 0L269.1 281.2 288 257.1l18.9 24.2L450 464l70 0 0-39L288 146.4 56 425zm131 39l77 0 24 0 24 0 77 0L288 334.9 187 464z" />
    </Icon>
);

export default Campground;