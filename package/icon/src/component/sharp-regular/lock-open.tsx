
import { Icon } from "../../index";

/**
 * A component that renders the `lock-open` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-open?s=sharp-regular lock-open}
 * @preview ![lock-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/lock-open.svg)
 */
const LockOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 128c0-44.2 35.8-80 80-80s80 35.8 80 80l0 72 0 24 48 0 0-24 0-72C560 57.3 502.7 0 432 0S304 57.3 304 128l0 64L48 192 0 192l0 48L0 464l0 48 48 0 352 0 48 0 0-48 0-224 0-48-48 0-48 0 0-64zM48 240l352 0 0 224L48 464l0-224z" />
    </Icon>
);

export default LockOpen;