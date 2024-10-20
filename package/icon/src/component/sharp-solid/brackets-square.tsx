
import { Icon } from "../../index";

/**
 * A component that renders the `brackets-square` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-square?s=sharp-solid brackets-square}
 * @preview ![brackets-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/brackets-square.svg)
 */
const BracketsSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 32l32 0 0 32 0 384 0 32-32 0-96 0-32 0 0-64 32 0 64 0 0-320-64 0-32 0 0-64 32 0 96 0zM32 32l96 0 32 0 0 64-32 0L64 96l0 320 64 0 32 0 0 64-32 0-96 0L0 480l0-32L0 64 0 32l32 0z" />
    </Icon>
);

export default BracketsSquare;