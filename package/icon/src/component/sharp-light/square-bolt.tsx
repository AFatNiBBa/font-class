
import { Icon } from "../../index";

/**
 * A component that renders the `square-bolt` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-bolt?s=sharp-light square-bolt}
 * @preview ![square-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-bolt.svg)
 */
const SquareBolt: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm264 80l8 0 18.4 0-2.6 18.3L274.4 224l45.6 0 16 0 0 16 0 8 0 6.6-4.7 4.7-136 136-4.7 4.7-6.6 0-8 0-18.4 0 2.6-18.3L173.6 288 128 288l-16 0 0-16 0-8 0-6.6 4.7-4.7 136-136 4.7-4.7 6.6 0zM158.6 256l33.4 0 18.4 0-2.6 18.3-10.5 73.8L289.4 256 256 256l-18.4 0 2.6-18.3 10.5-73.8L158.6 256z" />
    </Icon>
);

export default SquareBolt;