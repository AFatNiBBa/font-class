
import { Icon } from "../../index";

/**
 * A component that renders the `brightness` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brightness?s=sharp-regular brightness}
 * @preview ![brightness](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/brightness.svg)
 */
const Brightness: typeof Icon = x => (
    <Icon {...x}>
        <path d="M232 88l0 24 48 0 0-24 0-64 0-24L232 0l0 24 0 64zm24 120a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 144a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM0 232l0 48 24 0 64 0 24 0 0-48-24 0-64 0L0 232zm424 0l-24 0 0 48 24 0 64 0 24 0 0-48-24 0-64 0zM232 512l48 0 0-24 0-64 0-24-48 0 0 24 0 64 0 24zM92 58L58 92l17 17 45.3 45.3 17 17 33.9-33.9-17-17L108.9 75 92 58zM391.8 357.8l-17-17-33.9 33.9 17 17L403.1 437l17 17L454 420l-17-17-45.3-45.3zM58 420L92 454l17-17 45.3-45.3 17-17-33.9-33.9-17 17L75 403.1 58 420zM357.8 120.2l-17 17 33.9 33.9 17-17L437 108.9l17-17L420 58l-17 17-45.3 45.3z" />
    </Icon>
);

export default Brightness;