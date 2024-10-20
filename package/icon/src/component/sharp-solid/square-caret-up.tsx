
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-up?s=sharp-solid square-caret-up}
 * @preview ![square-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-caret-up.svg)
 */
const SquareCaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM96 288L224 160 352 288l0 32L96 320l0-32z" />
    </Icon>
);

export default SquareCaretUp;