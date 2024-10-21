
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarters` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarters?s=sharp-regular circle-quarters}
 * @preview ![circle-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-quarters.svg)
 */
const CircleQuarters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M108.9 403.1L256 256 403.1 403.1C440.7 365.4 464 313.4 464 256s-23.3-109.4-60.9-147.1L256 256 108.9 108.9C71.3 146.6 48 198.6 48 256s23.3 109.4 60.9 147.1zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleQuarters;