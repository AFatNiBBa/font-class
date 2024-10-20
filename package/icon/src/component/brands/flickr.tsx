
import { Icon } from "../../index";

/**
 * A component that renders the `flickr` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flickr?s=brands flickr}
 * @preview ![flickr](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/flickr.svg)
 */
const Flickr: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5zm159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5z" />
    </Icon>
);

export default Flickr;