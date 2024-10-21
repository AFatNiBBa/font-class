
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-pointer` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-pointer?s=sharp-light arrow-pointer}
 * @preview ![arrow-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-pointer.svg)
 */
const ArrowPointer: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M161.5 320L288 320l32 0-.1-32 0-10L32 32 0 46.9 0 432l7.2 7.9L29 463.8l20.5-25 84.2-102.6 59.7 134.4 29.2-13L161.5 320zm-39.4-20.3L32 409.6 32 74.1 282.3 288l-135.4 0-15.1 0-9.6 11.7z" />
    </Icon>
);

export default ArrowPointer;