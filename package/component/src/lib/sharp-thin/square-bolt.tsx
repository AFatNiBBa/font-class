
import { Icon } from "../../index";

/**
 * A component that renders the `square-bolt` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-bolt?s=sharp-thin square-bolt}
 * @preview ![square-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-bolt.svg)
 */
const SquareBolt: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM166.3 374.9L188 288l4-16-16.5 0L128 272l-16 0 0-16 0-8L267.6 127.8 288 112l-6.3 25.1L260 224l-4 16 16.5 0 47.5 0 16 0 0 16 0 8L180.4 384.2 160 400l6.3-25.1zM192 256l20.5 0-5 19.9-20.8 83.3L320 256.1l0-.1-64 0-20.5 0 5-19.9 20.8-83.3L128 255.9l0 .1 64 0z" />
    </Icon>
);

export default SquareBolt;