
import { Icon } from "../../index";

/**
 * A component that renders the `album` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album?s=solid album}
 * @preview ![album](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/album.svg)
 */
const Album: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM384 256A160 160 0 1 0 64 256a160 160 0 1 0 320 0zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Album;