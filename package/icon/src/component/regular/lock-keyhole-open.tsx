
import { Icon } from "../../index";

/**
 * A component that renders the `lock-keyhole-open` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole-open?s=regular lock-keyhole-open}
 * @preview ![lock-keyhole-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/lock-keyhole-open.svg)
 */
const LockKeyholeOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M432 48c-44.2 0-80 35.8-80 80l0 64 32 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l240 0 0-64C304 57.3 361.3 0 432 0s128 57.3 128 128l0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72c0-44.2-35.8-80-80-80zM384 240L64 240c-8.8 0-16 7.2-16 16l0 192c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-192c0-8.8-7.2-16-16-16zM256 376l-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24z" />
    </Icon>
);

export default LockKeyholeOpen;