
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-long` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-long?s=sharp-solid arrow-up-long}
 * @preview ![arrow-up-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-up-long.svg)
 */
const ArrowUpLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M169.4 22.6L192 0l22.6 22.6 128 128 22.6 22.6L320 218.5l-22.6-22.6L224 122.5 224 480l0 32-64 0 0-32 0-357.5L86.6 195.9 64 218.5 18.7 173.3l22.6-22.6 128-128z" />
    </Icon>
);

export default ArrowUpLong;