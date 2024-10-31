
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-maximize` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-maximize?s=duotone arrows-maximize}
 * @preview ![arrows-maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-maximize.svg)
 */
const ArrowsMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 64l0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-50.7L210.7 256 256 210.7 141.3 96 192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32C46.3 32 32 46.3 32 64zM256 301.3L370.7 416 320 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 50.7L301.3 256 256 301.3z" />
        <path d="M288 64c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-50.7L141.3 416l50.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 50.7L370.7 96 320 96c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default ArrowsMaximize;