
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sitemap` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sitemap?s=sharp-duotone-solid sitemap}
 * @preview ![sitemap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sitemap.svg)
 */
const Sitemap: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M56 232l0 24 0 64 48 0 0-40 160 0 0 40 48 0 0-40 160 0 0 40 48 0 0-64 0-24-24 0-184 0 0-40-48 0 0 40L80 232l-24 0z" />
        <path d="M208 32l160 0 0 160-160 0 0-160zM160 320l0 160L0 480 0 320l160 0zm208 0l0 160-160 0 0-160 160 0zm208 0l0 160-160 0 0-160 160 0z" />
    </Icon>
);

export default Sitemap;