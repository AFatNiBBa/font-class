
import { Icon } from "../../index";

/**
 * A component that renders the `lock-keyhole-open` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole-open?s=sharp-thin lock-keyhole-open}
 * @preview ![lock-keyhole-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/lock-keyhole-open.svg)
 */
const LockKeyholeOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 16c-61.9 0-112 50.1-112 112l0 64 96 0 16 0 0 16 0 288 0 16-16 0L16 512 0 512l0-16L0 208l0-16 16 0 304 0 0-64C320 57.3 377.3 0 448 0s128 57.3 128 128l0 88 0 8-16 0 0-8 0-88c0-61.9-50.1-112-112-112zM16 208l0 288 416 0 0-288-96 0-16 0L16 208zM272 336l-96 0 0 32 96 0 0-32zm16-16l0 16 0 32 0 16-16 0-96 0-16 0 0-16 0-32 0-16 16 0 96 0 16 0z" />
    </Icon>
);

export default LockKeyholeOpen;