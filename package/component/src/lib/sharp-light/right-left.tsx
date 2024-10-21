
import { Icon } from "../../index";

/**
 * A component that renders the `right-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-left?s=sharp-light right-left}
 * @preview ![right-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/right-left.svg)
 */
const RightLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 144l-22.6-22.6L400 32l-16 0-32 0 0 32 0 64L16 128 0 128l0 32 16 0 336 0 0 64 0 32 32 0 16 0 89.4-89.4L512 144zM386.7 64l80 80-80 80-2.7 0 0-160 2.7 0zM0 368l22.6 22.6L112 480l16 0 32 0 0-32 0-64 336 0 16 0 0-32-16 0-336 0 0-64 0-32-32 0-16 0L22.6 345.4 0 368zm125.3 80l-80-80 80-80 2.7 0 0 160-2.7 0z" />
    </Icon>
);

export default RightLeft;