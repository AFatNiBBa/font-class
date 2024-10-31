
import { Icon } from "../../index";

/**
 * A component that renders the `mars` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars?s=light mars}
 * @preview ![mars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mars.svg)
 */
const Mars: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 32c-8.8 0-16 7.2-16 16s7.2 16 16 16l89.4 0L288.6 168.7C258.1 143.3 218.8 128 176 128C78.8 128 0 206.8 0 304s78.8 176 176 176s176-78.8 176-176c0-42.8-15.3-82.1-40.7-112.6L416 86.6l0 89.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128c0-8.8-7.2-16-16-16L304 32zM32 304a144 144 0 1 1 288 0A144 144 0 1 1 32 304z" />
    </Icon>
);

export default Mars;