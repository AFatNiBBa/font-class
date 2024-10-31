
import { Icon } from "../../index";

/**
 * A component that renders the `mars` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars?s=sharp-regular mars}
 * @preview ![mars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mars.svg)
 */
const Mars: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M312 32l-24 0 0 48 24 0 54.1 0-83.7 83.7C252.8 141.3 215.9 128 176 128C78.8 128 0 206.8 0 304s78.8 176 176 176s176-78.8 176-176c0-39.9-13.3-76.8-35.7-106.3L400 113.9l0 54.1 0 24 48 0 0-24 0-112 0-24-24 0L312 32zM48 304a128 128 0 1 1 256 0A128 128 0 1 1 48 304z" />
    </Icon>
);

export default Mars;