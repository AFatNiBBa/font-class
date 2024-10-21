
import { Icon, generic } from "../../index";

/**
 * A component that renders the `album` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album?s=sharp-duotone-solid album}
 * @preview ![album](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/album.svg)
 */
const Album: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM384 256A160 160 0 1 1 64 256a160 160 0 1 1 320 0z" />
        <path d="M224 416a160 160 0 1 0 0-320 160 160 0 1 0 0 320zm0-192a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Album;