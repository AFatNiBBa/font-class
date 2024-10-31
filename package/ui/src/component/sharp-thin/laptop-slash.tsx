
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-slash?s=sharp-thin laptop-slash}
 * @preview ![laptop-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/laptop-slash.svg)
 */
const LaptopSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5zM487.3 480l-20.3-16L54.6 464 16 425.4 16 400l370 0-20.3-16L16 384 0 384l0 16 0 32 48 48 439.3 0zM560 352l16 0 0-304 0-16-16 0L152.3 32l20.3 16L560 48l0 304zM64 145.8L64 352l16 0 0-193.6L64 145.8z" />
    </Icon>
);

export default LaptopSlash;