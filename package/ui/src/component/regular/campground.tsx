
import { Icon } from "../../index";

/**
 * A component that renders the `campground` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/campground?s=regular campground}
 * @preview ![campground](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/campground.svg)
 */
const Campground: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M375.4 5.6c10.2 8.5 11.5 23.6 3 33.8l-59.1 70.7L555 392.1c8.4 10.1 13 22.8 13 35.9l0 28c0 30.9-25.1 56-56 56l-224 0L64 512c-30.9 0-56-25.1-56-56l0-28c0-13.1 4.6-25.8 13-35.9L256.7 110.1 197.6 39.4c-8.5-10.2-7.1-25.3 3-33.8s25.3-7.1 33.8 3L288 72.7 341.6 8.6c8.5-10.2 23.6-11.5 33.8-3zM57.9 422.8c-1.2 1.4-1.9 3.3-1.9 5.1l0 28c0 4.4 3.6 8 8 8l62 0L269.1 281.2c4.5-5.8 11.5-9.2 18.9-9.2s14.4 3.4 18.9 9.2L450 464l62 0c4.4 0 8-3.6 8-8l0-28c0-1.9-.7-3.7-1.9-5.1L288 147.5 57.9 422.8zM187 464l101 0 101 0L288 334.9 187 464z" />
    </Icon>
);

export default Campground;