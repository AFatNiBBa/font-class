
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crop-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop-simple?s=sharp-duotone-solid crop-simple}
 * @preview ![crop-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/crop-simple.svg)
 */
const CropSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 0l0 32 0 32 0 64 0 288 0 32 32 0 288 0 0-64-256 0 0-256 0-64 0-32 0-32L64 0zM448 384l0 64 32 0 32 0 0-64-32 0-32 0z" />
        <path d="M32 64L0 64l0 64 32 0 32 0 0-64L32 64zM384 480l0 32 64 0 0-32 0-384 0-32-32 0L128 64l0 64 256 0 0 352z" />
    </Icon>
);

export default CropSimple;