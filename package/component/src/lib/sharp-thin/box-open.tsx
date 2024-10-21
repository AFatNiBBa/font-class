
import { Icon } from "../../index";

/**
 * A component that renders the `box-open` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-open?s=sharp-thin box-open}
 * @preview ![box-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/box-open.svg)
 */
const BoxOpen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M581.1 31.2l2.3 5.9 48 120 3.4 8.4-8.7 2.3-210.7 56-5.5 1.5-3.2-4.7L320 91.7 233.3 220.5l-3.2 4.7-5.5-1.5-210.7-56-8.7-2.3L8.6 157l48-120 2.3-5.9 6.2 .9L320 69.2 574.8 32.1l6.2-.9zM570.9 48.8L333.7 83.4l83 123.4 196.4-52.2L570.9 48.8zM26.8 154.6l196.4 52.2L306.3 83.4 69.1 48.8 26.8 154.6zM560 216.1l16-4.6L576 416 320 480 64 416l0-204.4 16 4.6 0 187.4 232 58L312 200l0-8 16 0 0 8 0 261.5 232-58 0-187.4z" />
    </Icon>
);

export default BoxOpen;