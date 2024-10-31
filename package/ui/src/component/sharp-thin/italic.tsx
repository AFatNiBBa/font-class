
import { Icon } from "../../index";

/**
 * A component that renders the `italic` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/italic?s=sharp-thin italic}
 * @preview ![italic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/italic.svg)
 */
const Italic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 32l8 0 240 0 8 0 0 16-8 0-90.6 0L115.9 464 248 464l8 0 0 16-8 0L8 480l-8 0 0-16 8 0 90.6 0L268.1 48 136 48l-8 0 0-16z" />
    </Icon>
);

export default Italic;