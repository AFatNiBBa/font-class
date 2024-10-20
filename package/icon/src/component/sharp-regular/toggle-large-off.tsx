
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-large-off` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-off?s=sharp-regular toggle-large-off}
 * @preview ![toggle-large-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/toggle-large-off.svg)
 */
const ToggleLargeOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 112L48 112l0 288 288 0 0-288zm48 336l-48 0L48 448 0 448l0-48L0 112 0 64l48 0 288 0 48 0 144 0 48 0 0 48 0 288 0 48-48 0-144 0zm0-336l0 288 144 0 0-288-144 0z" />
    </Icon>
);

export default ToggleLargeOff;