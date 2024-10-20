
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-to-dot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-dot?s=duotone arrows-to-dot}
 * @preview ![arrows-to-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-to-dot.svg)
 */
const ArrowsToDot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 50.7-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 82.7 288 32zM393.4 342.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 50.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-50.7 0 9.4-9.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64zM118.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l50.7 0-9.4 9.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64zm50.7 269.3c12.5 12.5 32.8 12.5 45.3 0l9.4-9.4 0 50.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-50.7 9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3z" />
    </Icon>
);

export default ArrowsToDot;