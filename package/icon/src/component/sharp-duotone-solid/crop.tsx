
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crop` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop?s=sharp-duotone-solid crop}
 * @preview ![crop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/crop.svg)
 */
const Crop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 0l0 32 0 32 0 64 0 288 0 32 32 0 288 0 0-64-210.7 0L384 173.3l0-45.3-45.3 0L128 338.7 128 128l0-64 0-32 0-32L64 0zM402.7 64L416 64l32 0 0 32 0 13.3 62.6-62.6L465.4 1.4 402.7 64zM448 384l0 64 32 0 32 0 0-64-32 0-32 0z" />
        <path d="M32 64L0 64l0 64 32 0 32 0 0-64L32 64zM384 480l0 32 64 0 0-32 0-384 0-32-32 0L128 64l0 64 256 0 0 352z" />
    </Icon>
);

export default Crop;