
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-off` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-off?s=sharp-thin toggle-off}
 * @preview ![toggle-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/toggle-off.svg)
 */
const ToggleOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 112l0 288L16 400l0-288 544 0zm16-16l-16 0L16 96 0 96l0 16L0 400l0 16 16 0 544 0 16 0 0-16 0-288 0-16zM240 176l0 160L80 336l0-160 160 0zm16-16l-16 0L80 160l-16 0 0 16 0 160 0 16 16 0 160 0 16 0 0-16 0-160 0-16z" />
    </Icon>
);

export default ToggleOff;