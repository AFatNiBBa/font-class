
import { Icon } from "../../index";

/**
 * A component that renders the `google-play` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/google-play?s=brands google-play}
 * @preview ![google-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/google-play.svg)
 */
const GooglePlay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
    </Icon>
);

export default GooglePlay;