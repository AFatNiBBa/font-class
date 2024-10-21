
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-long` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-long?s=sharp-regular arrow-up-long}
 * @preview ![arrow-up-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-up-long.svg)
 */
const ArrowUpLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M209 17L192 0 175 17 39 153l-17 17L56 203.9l17-17 95-95L168 488l0 24 48 0 0-24 0-396.1 95 95 17 17 33.9-33.9-17-17L209 17z" />
    </Icon>
);

export default ArrowUpLong;