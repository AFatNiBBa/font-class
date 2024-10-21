
import { Icon } from "../../index";

/**
 * A component that renders the `v` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/v?s=sharp-regular v}
 * @preview ![v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/v.svg)
 */
const V: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M329.3 32L192 389.1 54.7 32 3.3 32 169.6 464.6l5.9 15.4 33 0 5.9-15.4L380.7 32l-51.4 0z" />
    </Icon>
);

export default V;