
import { Icon } from "../../index";

/**
 * A component that renders the `sun-bright` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun-bright?s=sharp-regular sun-bright}
 * @preview ![sun-bright](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sun-bright.svg)
 */
const SunBright: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 24l0 64 0 24-48 0 0-24 0-64 0-24 48 0 0 24zm157 84.9l-45.3 45.3-17 17-33.9-33.9 17-17L403.1 75l17-17L454 92l-17 17zM108.9 75l45.3 45.3 17 17-33.9 33.9-17-17L75 108.9 58 92 92 58l17 17zM24 232l64 0 24 0 0 48-24 0-64 0L0 280l0-48 24 0zm400 0l64 0 24 0 0 48-24 0-64 0-24 0 0-48 24 0zM154.2 391.8L108.9 437 92 454 58 420l17-17 45.3-45.3 17-17 33.9 33.9-17 17zm237.6-33.9L437 403.1l17 17L420 454l-17-17-45.3-45.3-17-17 33.9-33.9 17 17zM280 424l0 64 0 24-48 0 0-24 0-64 0-24 48 0 0 24zm40-168a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-176 0a112 112 0 1 1 224 0 112 112 0 1 1 -224 0z" />
    </Icon>
);

export default SunBright;