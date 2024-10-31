
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-right?s=sharp-solid square-chevron-right}
 * @preview ![square-chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-chevron-right.svg)
 */
const SquareChevronRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 480l0-448L0 32 0 480l448 0zM313 273L209 377l-17 17L158.1 360l17-17 87-87-87-87-17-17L192 118.1l17 17L313 239l17 17-17 17z" />
    </Icon>
);

export default SquareChevronRight;