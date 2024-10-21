
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-pointer` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-pointer?s=sharp-thin arrow-pointer}
 * @preview ![arrow-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-pointer.svg)
 */
const ArrowPointer: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M152.9 320L304 320l16 0 0-16-.1-26L32 32 0 46.9 0 432l18.1 19.8 10.9 12 10.3-12.5L139.4 329.1l69.3 146.3 14.5-6.8L152.9 320zm-18.3-10.1L28.3 439.3 16 425.8 16 57.1l13.4-6.3L303.9 285.4 304 304l-157.1 0-7.6 0-4.8 5.9z" />
    </Icon>
);

export default ArrowPointer;