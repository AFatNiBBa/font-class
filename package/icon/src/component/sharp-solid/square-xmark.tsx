
import { Icon } from "../../index";

/**
 * A component that renders the `square-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-xmark?s=sharp-solid square-xmark}
 * @preview ![square-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-xmark.svg)
 */
const SquareXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM321.9 192l-17 17-47 47 47 47 17 17L288 353.9l-17-17-47-47-47 47-17 17L126.1 320l17-17 47-47-47-47-17-17L160 158.1l17 17 47 47 47-47 17-17L321.9 192z" />
    </Icon>
);

export default SquareXmark;