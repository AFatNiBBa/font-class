
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-off` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-off?s=sharp-regular toggle-off}
 * @preview ![toggle-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/toggle-off.svg)
 */
const ToggleOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 112l0 288L48 400l0-288 480 0zm48-48l-48 0L48 64 0 64l0 48L0 400l0 48 48 0 480 0 48 0 0-48 0-288 0-48zM240 208l0 96-96 0 0-96 96 0zm48-48l-48 0-96 0-48 0 0 48 0 96 0 48 48 0 96 0 48 0 0-48 0-96 0-48z" />
    </Icon>
);

export default ToggleOff;