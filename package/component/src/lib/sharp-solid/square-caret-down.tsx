
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-down?s=sharp-solid square-caret-down}
 * @preview ![square-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-caret-down.svg)
 */
const SquareCaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 480l448 0 0-448L0 32 0 480zM352 224L224 352 96 224l0-32 256 0 0 32z" />
    </Icon>
);

export default SquareCaretDown;