
import { Icon } from "../../index";

/**
 * A component that renders the `brackets-square` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-square?s=sharp-thin brackets-square}
 * @preview ![brackets-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/brackets-square.svg)
 */
const BracketsSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M440 32l8 0 0 8 0 432 0 8-8 0-144 0-8 0 0-16 8 0 136 0 0-416L296 48l-8 0 0-16 8 0 144 0zM8 32l144 0 8 0 0 16-8 0L16 48l0 416 136 0 8 0 0 16-8 0L8 480l-8 0 0-8L0 40l0-8 8 0z" />
    </Icon>
);

export default BracketsSquare;