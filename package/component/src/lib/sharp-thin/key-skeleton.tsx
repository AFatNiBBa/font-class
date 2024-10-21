
import { Icon } from "../../index";

/**
 * A component that renders the `key-skeleton` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key-skeleton?s=sharp-thin key-skeleton}
 * @preview ![key-skeleton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/key-skeleton.svg)
 */
const KeySkeleton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 272c-32.5 0-62.3-12.1-84.8-32.2l-11-11c-20-22.6-32.2-52.3-32.2-84.8c0-70.7 57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zM160 144c0 36.9 13.9 70.5 36.7 96L72 364.7 60.7 376 10.3 426.3 4.7 432l5.7 5.7 64 64 5.7 5.7L91.3 496l-5.7-5.7L27.3 432 72 387.3l58.3 58.3 5.7 5.7L147.3 440l-5.7-5.7L83.3 376 208 251.3c25.5 22.8 59.1 36.7 96 36.7c79.5 0 144-64.5 144-144S383.5 0 304 0S160 64.5 160 144z" />
    </Icon>
);

export default KeySkeleton;