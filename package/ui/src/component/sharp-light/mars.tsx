
import { Icon } from "../../index";

/**
 * A component that renders the `mars` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars?s=sharp-light mars}
 * @preview ![mars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mars.svg)
 */
const Mars: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 32l-16 0 0 32 16 0 89.4 0L288.6 168.7C258.1 143.3 218.8 128 176 128C78.8 128 0 206.8 0 304s78.8 176 176 176s176-78.8 176-176c0-42.8-15.3-82.1-40.7-112.6L416 86.6l0 89.4 0 16 32 0 0-16 0-128 0-16-16 0L304 32zM32 304a144 144 0 1 1 288 0A144 144 0 1 1 32 304z" />
    </Icon>
);

export default Mars;