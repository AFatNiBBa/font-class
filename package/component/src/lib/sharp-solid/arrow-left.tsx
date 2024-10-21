
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left?s=sharp-solid arrow-left}
 * @preview ![arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-left.svg)
 */
const ArrowLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M25.4 278.6L2.7 256l22.6-22.6 144-144L192 66.7 237.2 112l-22.6 22.6L125.2 224 416 224l32 0 0 64-32 0-290.7 0 89.4 89.4L237.2 400 192 445.3l-22.6-22.6-144-144z" />
    </Icon>
);

export default ArrowLeft;