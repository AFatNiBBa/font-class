
import { Icon } from "../../index";

/**
 * A component that renders the `superpowers` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/superpowers?s=brands superpowers}
 * @preview ![superpowers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/superpowers.svg)
 */
const Superpowers: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32c-83.3 11-166.8 22-250 33-92 12.5-163.3 86.7-169 180-3.3 55.5 18 109.5 57.8 148.2L0 480c83.3-11 166.5-22 249.8-33 91.8-12.5 163.3-86.8 168.7-179.8 3.5-55.5-18-109.5-57.7-148.2L448 32zm-79.7 232.3c-4.2 79.5-74 139.2-152.8 134.5-79.5-4.7-140.7-71-136.3-151 4.5-79.2 74.3-139.3 153-134.5 79.3 4.7 140.5 71 136.1 151z" />
    </Icon>
);

export default Superpowers;