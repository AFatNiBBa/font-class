
import { Icon } from "../../index";

/**
 * A component that renders the `font` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font?s=sharp-regular font}
 * @preview ![font](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/font.svg)
 */
const Font: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M201.8 46.9L207.9 32l32.3 0 6.1 14.9L351.1 304l.9 0 0 2.1L403.4 432l20.6 0 24 0 0 48-24 0-112 0-24 0 0-48 24 0 39.5 0-32.7-80-189.8 0L96.5 432l39.5 0 24 0 0 48-24 0L24 480 0 480l0-48 24 0 20.6 0L96 306.1l0-2.1 .9 0L201.8 46.9zM148.7 304l150.6 0L224 119.5 148.7 304z" />
    </Icon>
);

export default Font;