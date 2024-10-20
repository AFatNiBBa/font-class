
import { Icon } from "../../index";

/**
 * A component that renders the `circle-bookmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bookmark?s=sharp-regular circle-bookmark}
 * @preview ![circle-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-bookmark.svg)
 */
const CircleBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 384l96-64 96 64 0-256-192 0 0 256z" />
    </Icon>
);

export default CircleBookmark;