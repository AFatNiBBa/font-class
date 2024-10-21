
import { Icon } from "../../index";

/**
 * A component that renders the `bandcamp` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bandcamp?s=brands bandcamp}
 * @preview ![bandcamp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/bandcamp.svg)
 */
const Bandcamp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm48.2,326.1h-181L207.9,178h181Z" />
    </Icon>
);

export default Bandcamp;