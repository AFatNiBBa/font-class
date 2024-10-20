
import { Icon } from "../../index";

/**
 * A component that renders the `deviantart` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/deviantart?s=brands deviantart}
 * @preview ![deviantart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/deviantart.svg)
 */
const Deviantart: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M320 93.2l-98.2 179.1 7.4 9.5H320v127.7H159.1l-13.5 9.2-43.7 84c-.3 0-8.6 8.6-9.2 9.2H0v-93.2l93.2-179.4-7.4-9.2H0V102.5h156l13.5-9.2 43.7-84c.3 0 8.6-8.6 9.2-9.2H320v93.1z" />
    </Icon>
);

export default Deviantart;