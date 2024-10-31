
import { Icon } from "../../index";

/**
 * A component that renders the `strava` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/strava?s=brands strava}
 * @preview ![strava](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/strava.svg)
 */
const Strava: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M158.4 0L7 292h89.2l62.2-116.1L220.1 292h88.5zm150.2 292l-43.9 88.2-44.6-88.2h-67.6l112.2 220 111.5-220z" />
    </Icon>
);

export default Strava;