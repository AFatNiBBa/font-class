
import { Icon } from "../../index";

/**
 * A component that renders the `lines-leaning` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lines-leaning?s=sharp-regular lines-leaning}
 * @preview ![lines-leaning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/lines-leaning.svg)
 */
const LinesLeaning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M190.7 63.7L198.5 41 153 25.6l-7.7 22.7-136 400L1.6 471 47 486.4l7.7-22.7 136-400zM292.2 37.2l-47.1-9.4-4.7 23.5-80 400-4.7 23.5 47.1 9.4 4.7-23.5 80-400 4.7-23.5zM384 32l-48 0 0 24 0 400 0 24 48 0 0-24 0-400 0-24z" />
    </Icon>
);

export default LinesLeaning;