
import { Icon } from "../../index";

/**
 * A component that renders the `toolbox` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toolbox?s=sharp-thin toolbox}
 * @preview ![toolbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/toolbox.svg)
 */
const Toolbox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M136 40l8 0 224 0 8 0 0 8 0 80 56 0 80 80 0 120 0 16 0 120 0 16-16 0L16 480 0 480l0-16L0 344l0-16L0 208l80-80 56 0 0-80 0-8zM16 344l0 120 480 0 0-120-144 0 0 48 0 8-16 0 0-8 0-48-160 0 0 48 0 8-16 0 0-8 0-48L16 344zm480-16l0-113.4L425.4 144 376 144l-16 0-208 0-16 0-49.4 0L16 214.6 16 328l144 0 0-48 0-8 16 0 0 8 0 48 160 0 0-48 0-8 16 0 0 8 0 48 144 0zM360 56L152 56l0 72 208 0 0-72z" />
    </Icon>
);

export default Toolbox;