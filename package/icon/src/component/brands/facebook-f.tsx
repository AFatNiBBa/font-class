
import { Icon } from "../../index";

/**
 * A component that renders the `facebook-f` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/facebook-f?s=brands facebook-f}
 * @preview ![facebook-f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/facebook-f.svg)
 */
const FacebookF: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
    </Icon>
);

export default FacebookF;