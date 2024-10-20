
import { Icon } from "../../index";

/**
 * A component that renders the `repeat` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/repeat?s=sharp-solid repeat}
 * @preview ![repeat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/repeat.svg)
 */
const Repeat: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 224L0 96 0 64l32 0 288 0 0-64 32 0 96 96-96 96-32 0 0-64L64 128l0 96 0 32L0 256l0-32zm512 64l0 128 0 32-32 0-288 0 0 64-32 0L64 416l96-96 32 0 0 64 256 0 0-96 0-32 64 0 0 32z" />
    </Icon>
);

export default Repeat;