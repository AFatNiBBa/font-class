
import { Icon } from "../../index";

/**
 * A component that renders the `sitemap` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sitemap?s=sharp-light sitemap}
 * @preview ![sitemap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sitemap.svg)
 */
const Sitemap: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 64l0 96-32 0-32 0-32 0 0-96 96 0zM240 192l32 0 0 48L80 240l-16 0 0 16 0 64-32 0L0 320l0 32 0 96 0 32 32 0 96 0 32 0 0-32 0-96 0-32-32 0-32 0 0-48 176 0 0 48-32 0-32 0 0 32 0 96 0 32 32 0 96 0 32 0 0-32 0-96 0-32-32 0-32 0 0-48 176 0 0 48-32 0-32 0 0 32 0 96 0 32 32 0 96 0 32 0 0-32 0-96 0-32-32 0-32 0 0-64 0-16-16 0-192 0 0-48 32 0 32 0 0-32 0-96 0-32-32 0-96 0-32 0 0 32 0 96 0 32 32 0zM32 448l0-96 96 0 0 96-96 0zm208-96l96 0 0 96-96 0 0-96zm208 96l0-96 96 0 0 96-96 0z" />
    </Icon>
);

export default Sitemap;