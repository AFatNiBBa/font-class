
import { Icon } from "../../index";

/**
 * A component that renders the `flipboard` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flipboard?s=brands flipboard}
 * @preview ![flipboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/flipboard.svg)
 */
const Flipboard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32v448h448V32H0zm358.4 179.2h-89.6v89.6h-89.6v89.6H89.6V121.6h268.8v89.6z" />
    </Icon>
);

export default Flipboard;