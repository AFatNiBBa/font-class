
import { Icon, generic } from "../../index";

/**
 * A component that renders the `image-portrait` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-portrait?s=sharp-duotone-solid image-portrait}
 * @preview ![image-portrait](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/image-portrait.svg)
 */
const ImagePortrait: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l384 0L384 0 0 0zM80 384l32-96 160 0 32 96L80 384zM256 192a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM304 384l-32-96-160 0L80 384l224 0z" />
    </Icon>
);

export default ImagePortrait;