
import { Icon } from "../../index";

/**
 * A component that renders the `font` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font?s=thin font}
 * @preview ![font](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/font.svg)
 */
const Font: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M231.4 37c-1.2-3-4.2-5-7.4-5s-6.2 2-7.4 5L42.6 464 8 464c-4.4 0-8 3.6-8 8s3.6 8 8 8l96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-44.1 0L112 336 336 336l52.1 128L344 464c-4.4 0-8 3.6-8 8s3.6 8 8 8l96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-34.6 0L231.4 37zm98 283l-210.9 0L224 61.2 329.4 320z" />
    </Icon>
);

export default Font;