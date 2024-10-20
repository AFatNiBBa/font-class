
import { Icon } from "../../index";

/**
 * A component that renders the `font` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font?s=regular font}
 * @preview ![font](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/font.svg)
 */
const Font: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M246.2 46.9C242.5 37.9 233.8 32 224 32s-18.5 5.9-22.2 14.9L44.6 432 24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-39.5 0 32.7-80 189.8 0 32.7 80L312 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-20.6 0L246.2 46.9zM299.3 304l-150.6 0L224 119.5 299.3 304z" />
    </Icon>
);

export default Font;