
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-left?s=sharp-solid square-arrow-left}
 * @preview ![square-arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-arrow-left.svg)
 */
const SquareArrowLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32L0 480l448 0 0-448L0 32zM71 239L183 127l17-17L233.9 144l-17 17-71 71L360 232l24 0 0 48-24 0-214.1 0 71 71 17 17L200 401.9l-17-17L71 273l-17-17 17-17z" />
    </Icon>
);

export default SquareArrowLeft;