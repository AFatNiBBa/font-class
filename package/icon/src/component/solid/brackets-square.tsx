
import { Icon } from "../../index";

/**
 * A component that renders the `brackets-square` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-square?s=solid brackets-square}
 * @preview ![brackets-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/brackets-square.svg)
 */
const BracketsSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0 0-320-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zM64 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 96l0 320 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z" />
    </Icon>
);

export default BracketsSquare;