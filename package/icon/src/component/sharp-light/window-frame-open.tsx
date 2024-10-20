
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame-open` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame-open?s=sharp-light window-frame-open}
 * @preview ![window-frame-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/window-frame-open.svg)
 */
const WindowFrameOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 32l176 0 0 224-176 0 0-224zM480 288l0-32 0-224 0-32L448 0 64 0 32 0l0 32 0 224 0 32 32 0 384 0 32 0zM64 256L64 32l176 0 0 224L64 256zM16 480L0 480l0 32 16 0 32 0 416 0 32 0 16 0 0-32-16 0-16 0 0-160-32 0 0 160L64 480l0-160-32 0 0 160-16 0z" />
    </Icon>
);

export default WindowFrameOpen;