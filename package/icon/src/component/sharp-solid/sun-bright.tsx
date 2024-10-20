
import { Icon } from "../../index";

/**
 * A component that renders the `sun-bright` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun-bright?s=sharp-solid sun-bright}
 * @preview ![sun-bright](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sun-bright.svg)
 */
const SunBright: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 24l0-24L232 0l0 24 0 64 0 24 48 0 0-24 0-64zm157 84.9l17-17L420 58l-17 17-45.3 45.3-17 17 33.9 33.9 17-17L437 108.9zM108.9 75L92 58 58 92l17 17 45.3 45.3 17 17 33.9-33.9-17-17L108.9 75zM24 232L0 232l0 48 24 0 64 0 24 0 0-48-24 0-64 0zm400 0l-24 0 0 48 24 0 64 0 24 0 0-48-24 0-64 0zM154.2 391.8l17-17-33.9-33.9-17 17L75 403.1 58 420 92 454l17-17 45.3-45.3zm237.6-33.9l-17-17-33.9 33.9 17 17L403.1 437l17 17L454 420l-17-17-45.3-45.3zM280 424l0-24-48 0 0 24 0 64 0 24 48 0 0-24 0-64zm-24-56a112 112 0 1 0 0-224 112 112 0 1 0 0 224z" />
    </Icon>
);

export default SunBright;