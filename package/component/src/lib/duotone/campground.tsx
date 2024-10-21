
import { Icon, generic } from "../../index";

/**
 * A component that renders the `campground` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/campground?s=duotone campground}
 * @preview ![campground](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/campground.svg)
 */
const Campground: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 448l168.5 0L288 448l119.5 0L576 448l0 16c0 26.4-21.3 47.8-47.7 48l-.3 0-240 0L48 512l-.3 0C21.3 511.8 0 490.4 0 464l0-16z" />
        <path d="M372 7c13.8 11 16 31.2 5 45l-48 60L563.7 405.4c7.9 9.9 12.3 22.3 12.3 35l0 7.6-168.5 0L288 291.7 168.5 448 0 448l0-7.6c0-12.7 4.3-25.1 12.3-35L247 112 199 52c-11-13.8-8.8-33.9 5-45s33.9-8.8 45 5l39 48.8L327 12c11-13.8 31.2-16 45-5zM47.7 512l480.7 0-.3 0-240 0L48 512l-.3 0z" />
    </Icon>
);

export default Campground;