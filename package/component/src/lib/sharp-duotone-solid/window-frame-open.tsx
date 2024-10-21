
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window-frame-open` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame-open?s=sharp-duotone-solid window-frame-open}
 * @preview ![window-frame-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/window-frame-open.svg)
 */
const WindowFrameOpen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 64l0 160 136 0 0-160L96 64zm184 0l0 160 136 0 0-160L280 64z" />
        <path d="M480 64l0 160 0 64-64 0L96 288l-64 0 0-64L32 64 32 0 96 0 416 0l64 0 0 64zM232 64L96 64l0 160 136 0 0-160zm48 0l0 160 136 0 0-160L280 64zM96 448l320 0 0-128 64 0 0 128 32 0 0 64-32 0-32 0L64 512l-32 0L0 512l0-64 32 0 0-128 64 0 0 128z" />
    </Icon>
);

export default WindowFrameOpen;