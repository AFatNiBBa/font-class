
import { Icon } from "../../index";

/**
 * A component that renders the `lock-keyhole` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole?s=sharp-light lock-keyhole}
 * @preview ![lock-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/lock-keyhole.svg)
 */
const LockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32c53 0 96 43 96 96l0 64-192 0 0-64c0-53 43-96 96-96zM96 128l0 64-64 0L0 192l0 32L0 480l0 32 32 0 384 0 32 0 0-32 0-256 0-32-32 0-64 0 0-64C352 57.3 294.7 0 224 0S96 57.3 96 128zM32 224l384 0 0 256L32 480l0-256zm208 88l0-16-32 0 0 16 0 80 0 16 32 0 0-16 0-80z" />
    </Icon>
);

export default LockKeyhole;