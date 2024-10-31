
import { Icon } from "../../index";

/**
 * A component that renders the `whiskey-glass` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whiskey-glass?s=sharp-regular whiskey-glass}
 * @preview ![whiskey-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/whiskey-glass.svg)
 */
const WhiskeyGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M91.9 336l328.2 0-13.7 96-300.7 0L91.9 336zM41 318.8L64 480l384 0 23-161.2c.6-2.1 1-4.4 1-6.8L505.1 80 512 32l-48.5 0-415 0L0 32 6.9 80 40 312c0 2.3 .3 4.6 1 6.8zM85.1 288L55.3 80l401.3 0L426.9 288 85.1 288z" />
    </Icon>
);

export default WhiskeyGlass;