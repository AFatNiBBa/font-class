
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up?s=sharp-regular arrow-up}
 * @preview ![arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-up.svg)
 */
const ArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M209 50.2l-17-17-17 17L21.4 203.8l-17 17 33.9 33.9 17-17L168 125.1 168 456l0 24 48 0 0-24 0-330.8L328.6 237.8l17 17 33.9-33.9-17-17L209 50.2z" />
    </Icon>
);

export default ArrowUp;