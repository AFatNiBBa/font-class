
import { Icon } from "../../index";

/**
 * A component that renders the `align-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-left?s=sharp-solid align-left}
 * @preview ![align-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/align-left.svg)
 */
const AlignLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 32l0 64L0 96 0 32l288 0zm0 256l0 64L0 352l0-64 288 0zM0 160l448 0 0 64L0 224l0-64zM448 416l0 64L0 480l0-64 448 0z" />
    </Icon>
);

export default AlignLeft;