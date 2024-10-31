
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window-frame-open` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame-open?s=duotone window-frame-open}
 * @preview ![window-frame-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/window-frame-open.svg)
 */
const WindowFrameOpen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 64l0 160 136 0 0-160L96 64zm184 0l0 160 136 0 0-160L280 64z" />
        <path d="M480 224l0-160c0-35.3-28.7-64-64-64L96 0C60.7 0 32 28.7 32 64l0 160 0 64 64 0 320 0 64 0 0-64zm-64 0l-136 0 0-160 136 0 0 160zm-184 0L96 224 96 64l136 0 0 160zM96 448l0-128-64 0 0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 384 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-128-64 0 0 128L96 448z" />
    </Icon>
);

export default WindowFrameOpen;