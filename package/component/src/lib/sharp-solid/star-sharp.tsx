
import { Icon } from "../../index";

/**
 * A component that renders the `star-sharp` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-sharp?s=sharp-solid star-sharp}
 * @preview ![star-sharp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/star-sharp.svg)
 */
const StarSharp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288.1 0l63.5 195.6H557.2L390.9 316.4 454.4 512 288.1 391.1 121.7 512l63.5-195.6L18.9 195.6H224.5L288.1 0z" />
    </Icon>
);

export default StarSharp;