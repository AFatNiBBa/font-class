
import { Icon } from "../../index";

/**
 * A component that renders the `copyright` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/copyright?s=thin copyright}
 * @preview ![copyright](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/copyright.svg)
 */
const Copyright: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm73.5-182.5c-40.6 40.6-106.5 40.6-147.1 0s-40.6-106.5 0-147.1s106.5-40.6 147.1 0c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3c-46.9-46.9-122.8-46.9-169.7 0s-46.9 122.8 0 169.7s122.8 46.9 169.7 0c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0z" />
    </Icon>
);

export default Copyright;