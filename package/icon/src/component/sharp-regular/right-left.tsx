
import { Icon } from "../../index";

/**
 * A component that renders the `right-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-left?s=sharp-regular right-left}
 * @preview ![right-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/right-left.svg)
 */
const RightLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 128l-33.9 33.9L384 256l-48 0 0-48 0-56L24 152 0 152l0-48 24 0 312 0 0-56 0-48 48 0 94.1 94.1L512 128zm-67.9 0L384 67.9l0 120.2L444.1 128zM488 360l24 0 0 48-24 0-312 0 0 56 0 48-48 0L33.9 417.9 0 384l33.9-33.9L128 256l48 0 0 48 0 56 312 0zM128 444.1l0-120.2L67.9 384 128 444.1z" />
    </Icon>
);

export default RightLeft;