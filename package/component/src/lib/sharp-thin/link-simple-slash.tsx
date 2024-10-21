
import { Icon } from "../../index";

/**
 * A component that renders the `link-simple-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-simple-slash?s=sharp-thin link-simple-slash}
 * @preview ![link-simple-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/link-simple-slash.svg)
 */
const LinkSimpleSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5zM576 256c0-88.4-71.6-160-160-160l-56 0-8 0 0 16 8 0 56 0c79.5 0 144 64.5 144 144c0 29.2-8.7 56.4-23.6 79.1L549 345c17.1-25.5 27-56.1 27-89zm-112 8l8 0 0-16-8 0-37.9 0 20.3 16 17.7 0zM193.7 248L176 248l-8 0 0 16 8 0 37.9 0-20.3-16zm-90-71.1L91 167C74 192.4 64 223 64 256c0 88.4 71.6 160 160 160l56 0 8 0 0-16-8 0-56 0c-79.5 0-144-64.5-144-144c0-29.2 8.7-56.4 23.6-79.1z" />
    </Icon>
);

export default LinkSimpleSlash;