
import { Icon } from "../../index";

/**
 * A component that renders the `campground` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/campground?s=sharp-solid campground}
 * @preview ![campground](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/campground.svg)
 */
const Campground: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M241 2l20 25 27 33.8L315 27 335 2l50 40L365 67l-36 45L569 412l7 8.8 0 11.2 0 48 0 32-32 0L32 512 0 512l0-32 0-48 0-11.2L7 412 247 112 211 67 191 42 241 2zm47 289.7L168.5 448l239.1 0L288 291.7z" />
    </Icon>
);

export default Campground;