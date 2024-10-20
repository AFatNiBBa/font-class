
import { Icon } from "../../index";

/**
 * A component that renders the `lock-open` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-open?s=sharp-solid lock-open}
 * @preview ![lock-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/lock-open.svg)
 */
const LockOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 0 32 64 0 0-32 0-48C576 64.5 511.5 0 432 0S288 64.5 288 144l0 48L0 192 0 512l448 0 0-320-96 0 0-48z" />
    </Icon>
);

export default LockOpen;