
import { Icon } from "../../index";

/**
 * A component that renders the `lock-open` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-open?s=sharp-thin lock-open}
 * @preview ![lock-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/lock-open.svg)
 */
const LockOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 128c0-61.9 50.1-112 112-112s112 50.1 112 112l0 88 0 8 16 0 0-8 0-88C576 57.3 518.7 0 448 0S320 57.3 320 128l0 64L16 192 0 192l0 16L0 496l0 16 16 0 416 0 16 0 0-16 0-288 0-16-16 0-96 0 0-64zm-16 80l16 0 96 0 0 288L16 496l0-288 304 0z" />
    </Icon>
);

export default LockOpen;