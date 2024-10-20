
import { Icon } from "../../index";

/**
 * A component that renders the `square-rss` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-rss?s=sharp-solid square-rss}
 * @preview ![square-rss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-rss.svg)
 */
const SquareRss: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm32 80c150.2 0 272 121.8 272 272l-48 0c0-123.7-100.3-224-224-224l0-48zm0 96c97.2 0 176 78.8 176 176l-48 0c0-70.7-57.3-128-128-128l0-48zm0 144a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default SquareRss;