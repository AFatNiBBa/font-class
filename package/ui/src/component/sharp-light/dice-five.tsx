
import { Icon } from "../../index";

/**
 * A component that renders the `dice-five` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-five?s=sharp-light dice-five}
 * @preview ![dice-five](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/dice-five.svg)
 */
const DiceFive: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM128 136a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm216 24a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM224 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 120a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM128 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default DiceFive;