
import { Icon } from "../../index";

/**
 * A component that renders the `window` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window?s=sharp-thin window}
 * @preview ![window](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/window.svg)
 */
const Window: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 48l0 416 480 0 0-416L16 48zM0 32l16 0 480 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm112 80l0 32-32 0 0-32 32 0zm64 0l32 0 0 32-32 0 0-32zm128 0l0 32-32 0 0-32 32 0z" />
    </Icon>
);

export default Window;