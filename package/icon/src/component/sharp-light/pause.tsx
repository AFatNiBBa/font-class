
import { Icon } from "../../index";

/**
 * A component that renders the `pause` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pause?s=sharp-light pause}
 * @preview ![pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pause.svg)
 */
const Pause: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 96l0 320 80 0 0-320L32 96zM0 64l32 0 80 0 32 0 0 32 0 320 0 32-32 0-80 0L0 448l0-32L0 96 0 64zM208 96l0 320 80 0 0-320-80 0zM176 64l32 0 80 0 32 0 0 32 0 320 0 32-32 0-80 0-32 0 0-32 0-320 0-32z" />
    </Icon>
);

export default Pause;