
import { Icon } from "../../index";

/**
 * A component that renders the `campground` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/campground?s=sharp-duotone-solid campground}
 * @preview ![campground](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/campground.svg)
 */
const Campground: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M261 25L241 0 191 40l20 25 36 45L7 410l-7 8.8L0 430l0 18 166.9 0L288 289.7 409.1 448 576 448l0-18 0-11.2-7-8.8L329 110l36-45 20-25L335 0 315 25 288 58.8 261 25z" />
    </Icon>
);

export default Campground;