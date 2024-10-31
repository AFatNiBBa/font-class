
import { Icon } from "../../index";

/**
 * A component that renders the `brackets-square` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-square?s=sharp-regular brackets-square}
 * @preview ![brackets-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/brackets-square.svg)
 */
const BracketsSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 32L0 32 0 56 0 456l0 24 24 0 96 0 24 0 0-48-24 0-72 0L48 80l72 0 24 0 0-48-24 0L24 32zm400 0l-96 0-24 0 0 48 24 0 72 0 0 352-72 0-24 0 0 48 24 0 96 0 24 0 0-24 0-400 0-24-24 0z" />
    </Icon>
);

export default BracketsSquare;