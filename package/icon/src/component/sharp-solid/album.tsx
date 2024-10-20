
import { Icon } from "../../index";

/**
 * A component that renders the `album` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album?s=sharp-solid album}
 * @preview ![album](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/album.svg)
 */
const Album: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 448L0 480 0 32zM384 256A160 160 0 1 0 64 256a160 160 0 1 0 320 0zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Album;