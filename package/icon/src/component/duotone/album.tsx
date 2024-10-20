
import { Icon, generic } from "../../index";

/**
 * A component that renders the `album` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album?s=duotone album}
 * @preview ![album](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/album.svg)
 */
const Album: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM384 256A160 160 0 1 1 64 256a160 160 0 1 1 320 0z" />
        <path d="M224 416a160 160 0 1 0 0-320 160 160 0 1 0 0 320zm0-192a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Album;