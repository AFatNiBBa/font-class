
import { Icon } from "../../index";

/**
 * A component that renders the `right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right?s=sharp-thin right}
 * @preview ![right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/right.svg)
 */
const Right: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 208l-16 0L16 208l0 96 208 0 16 0 0 16 0 112 9.4 0 176-176L249.4 80 240 80l0 112 0 16zM256 64L436.7 244.7 448 256l-11.3 11.3L256 448l-16 0-16 0 0-16 0-96 0-16-16 0L16 320 0 320l0-16 0-96 0-16 16 0 192 0 16 0 0-16 0-96 0-16 16 0 16 0z" />
    </Icon>
);

export default Right;