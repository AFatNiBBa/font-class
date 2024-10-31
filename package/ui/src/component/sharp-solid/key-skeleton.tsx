
import { Icon } from "../../index";

/**
 * A component that renders the `key-skeleton` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key-skeleton?s=sharp-solid key-skeleton}
 * @preview ![key-skeleton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/key-skeleton.svg)
 */
const KeySkeleton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 64a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 224c79.5 0 144-64.5 144-144S383.5 0 304 0S160 64.5 160 144c0 28.2 8.1 54.5 22.1 76.7L25.4 377.4 2.7 400l22.6 22.6 64 64L112 509.3 157.3 464l-22.6-22.6L93.3 400 112 381.3l41.4 41.4L176 445.3 221.3 400l-22.6-22.6L157.3 336l70.1-70.1c22.2 14 48.5 22.1 76.7 22.1z" />
    </Icon>
);

export default KeySkeleton;