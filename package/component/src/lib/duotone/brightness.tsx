
import { Icon, generic } from "../../index";

/**
 * A component that renders the `brightness` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brightness?s=duotone brightness}
 * @preview ![brightness](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/brightness.svg)
 */
const Brightness: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 17.7 14.3 32 32 32l48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0c-17.7 0-32 14.3-32 32zM73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3l32 32c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-32-32c-12.5-12.5-32.8-12.5-45.3 0zm0 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l32-32c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-32 32zM224 32l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm0 400l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zM361.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l32-32c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-32 32zm0 256c-12.5 12.5-12.5 32.8 0 45.3l32 32c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-32-32c-12.5-12.5-32.8-12.5-45.3 0zM400 256c0 17.7 14.3 32 32 32l48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0c-17.7 0-32 14.3-32 32z" />
        <path d="M160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default Brightness;