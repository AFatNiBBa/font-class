
import { Icon } from "../../index";

/**
 * A component that renders the `sitemap` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sitemap?s=sharp-solid sitemap}
 * @preview ![sitemap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sitemap.svg)
 */
const Sitemap: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M208 32l160 0 0 160-56 0 0 40 184 0 24 0 0 24 0 64 56 0 0 160-160 0 0-160 56 0 0-40-160 0 0 40 56 0 0 160-160 0 0-160 56 0 0-40-160 0 0 40 56 0 0 160L0 480 0 320l56 0 0-64 0-24 24 0 184 0 0-40-56 0 0-160z" />
    </Icon>
);

export default Sitemap;