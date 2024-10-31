
import { Icon } from "../../index";

/**
 * A component that renders the `bring-front` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-front?s=sharp-light bring-front}
 * @preview ![bring-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bring-front.svg)
 */
const BringFront: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 32l192 0 0 32 32 0 0-32 0-32L224 0 32 0 0 0 0 32 0 224l0 32 32 0 96 0 0-32-96 0L32 32zM384 480l0 32 32 0 192 0 32 0 0-32 0-192 0-32-32 0-96 0 0 32 96 0 0 192-192 0 0-32-32 0 0 32zm64-352l0 256-256 0 0-256 256 0zM192 96l-32 0 0 32 0 256 0 32 32 0 256 0 32 0 0-32 0-256 0-32-32 0L192 96zm64 96l128 0 0 128-128 0 0-128zm-32-32l0 32 0 128 0 32 32 0 128 0 32 0 0-32 0-128 0-32-32 0-128 0-32 0z" />
    </Icon>
);

export default BringFront;