
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crop-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop-simple?s=duotone crop-simple}
 * @preview ![crop-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/crop-simple.svg)
 */
const CropSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 32l0 32 0 64 0 256c0 35.3 28.7 64 64 64l256 0 0-64-256 0 0-256 0-64 0-32c0-17.7-14.3-32-32-32S64 14.3 64 32zM448 384l0 64 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0z" />
        <path d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l32 0 0-64L32 64zM384 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-352c0-35.3-28.7-64-64-64L128 64l0 64 256 0 0 352z" />
    </Icon>
);

export default CropSimple;