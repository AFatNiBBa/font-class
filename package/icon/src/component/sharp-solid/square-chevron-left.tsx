
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-left?s=sharp-solid square-chevron-left}
 * @preview ![square-chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-chevron-left.svg)
 */
const SquareChevronLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32L0 480l448 0 0-448L0 32zM135 239L239 135l17-17L289.9 152l-17 17-87 87 87 87 17 17L256 393.9l-17-17L135 273l-17-17 17-17z" />
    </Icon>
);

export default SquareChevronLeft;