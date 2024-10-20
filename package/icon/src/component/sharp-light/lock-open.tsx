
import { Icon } from "../../index";

/**
 * A component that renders the `lock-open` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-open?s=sharp-light lock-open}
 * @preview ![lock-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/lock-open.svg)
 */
const LockOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 128c0-53 43-96 96-96s96 43 96 96l0 80 0 16 32 0 0-16 0-80C576 57.3 518.7 0 448 0S320 57.3 320 128l0 64L32 192 0 192l0 32L0 480l0 32 32 0 384 0 32 0 0-32 0-256 0-32-32 0-64 0 0-64zm-16 96l80 0 0 256L32 480l0-256 304 0z" />
    </Icon>
);

export default LockOpen;