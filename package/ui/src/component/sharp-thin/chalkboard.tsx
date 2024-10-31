
import { Icon } from "../../index";

/**
 * A component that renders the `chalkboard` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard?s=sharp-thin chalkboard}
 * @preview ![chalkboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chalkboard.svg)
 */
const Chalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 32l8 0 496 0 8 0 0 8 0 392 0 8-16 0 0-8 0-384L48 48l0 384 0 8-16 0 0-8L32 40l0-8zM0 464l8 0 248 0 0-72 0-8 8 0 144 0 8 0 0 8 0 72 152 0 8 0 0 16-8 0-152 0-8 0-144 0-8 0L8 480l-8 0 0-16zm400 0l0-64-128 0 0 64 128 0z" />
    </Icon>
);

export default Chalkboard;