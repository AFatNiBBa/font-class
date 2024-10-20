
import { Icon } from "../../index";

/**
 * A component that renders the `ban` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban?s=sharp-regular ban}
 * @preview ![ban](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ban.svg)
 */
const Ban: typeof Icon = x => (
    <Icon {...x}>
        <path d="M385.1 419.1L92.9 126.9C64.8 162.3 48 207.2 48 256c0 114.9 93.1 208 208 208c48.8 0 93.7-16.8 129.1-44.9zm33.9-33.9C447.2 349.7 464 304.8 464 256c0-114.9-93.1-208-208-208c-48.8 0-93.7 16.8-129.1 44.9L419.1 385.1zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default Ban;