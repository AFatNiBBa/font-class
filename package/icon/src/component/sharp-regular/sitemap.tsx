
import { Icon } from "../../index";

/**
 * A component that renders the `sitemap` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sitemap?s=sharp-regular sitemap}
 * @preview ![sitemap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sitemap.svg)
 */
const Sitemap: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 80l0 64-64 0 0-64 64 0zM256 32l-48 0 0 48 0 64 0 48 48 0 8 0 0 40L80 232l-24 0 0 24 0 64-8 0L0 320l0 48 0 64 0 48 48 0 64 0 48 0 0-48 0-64 0-48-48 0-8 0 0-40 160 0 0 40-8 0-48 0 0 48 0 64 0 48 48 0 64 0 48 0 0-48 0-64 0-48-48 0-8 0 0-40 160 0 0 40-8 0-48 0 0 48 0 64 0 48 48 0 64 0 48 0 0-48 0-64 0-48-48 0-8 0 0-64 0-24-24 0-184 0 0-40 8 0 48 0 0-48 0-64 0-48-48 0-64 0zM48 432l0-64 64 0 0 64-64 0zm208-64l64 0 0 64-64 0 0-64zm208 64l0-64 64 0 0 64-64 0z" />
    </Icon>
);

export default Sitemap;