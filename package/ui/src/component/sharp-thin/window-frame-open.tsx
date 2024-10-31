
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame-open` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame-open?s=sharp-thin window-frame-open}
 * @preview ![window-frame-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/window-frame-open.svg)
 */
const WindowFrameOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 16l200 0 0 256-200 0 0-256zM480 288l0-16 0-256 0-16L464 0 48 0 32 0l0 16 0 256 0 16 16 0 416 0 16 0zM48 272L48 16l200 0 0 256L48 272zM8 496l-8 0 0 16 8 0 32 0 432 0 32 0 8 0 0-16-8 0-24 0 0-176-16 0 0 176L48 496l0-176-16 0 0 176L8 496z" />
    </Icon>
);

export default WindowFrameOpen;