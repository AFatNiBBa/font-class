
import { Icon } from "../../index";

/**
 * A component that renders the `unlock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock?s=sharp-light unlock}
 * @preview ![unlock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/unlock.svg)
 */
const Unlock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 128c0-53 43-96 96-96c43.5 0 80.2 28.9 92 68.6l30.7-9.1C331 38.6 282 0 224 0C153.3 0 96 57.3 96 128l0 64-64 0L0 192l0 32L0 480l0 32 32 0 384 0 32 0 0-32 0-256 0-32-32 0-288 0 0-64zM32 480l0-256 384 0 0 256L32 480z" />
    </Icon>
);

export default Unlock;