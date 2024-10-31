
import { Icon, generic } from "../../index";

/**
 * A component that renders the `frame` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frame?s=duotone frame}
 * @preview ![frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/frame.svg)
 */
const Frame: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 0 64 0 192-64 0 0-192 0-64 0-32zm0 352l64 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32zM320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32-64 0 0-32zm0 96l64 0 0 192 0 64 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32 0-64 0-192z" />
        <path d="M416 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0 0-64 288 0zM32 96l32 0 0 64-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 320c-17.7 0-32-14.3-32-32s14.3-32 32-32l288 0 0 64L32 416zm384 0l-32 0 0-64 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
    </Icon>
);

export default Frame;