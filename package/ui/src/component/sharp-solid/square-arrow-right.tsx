
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-right?s=sharp-solid square-arrow-right}
 * @preview ![square-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-arrow-right.svg)
 */
const SquareArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 480l0-448L0 32 0 480l448 0zM377 273L265 385l-17 17L214.1 368l17-17 71-71L88 280l-24 0 0-48 24 0 214.1 0-71-71-17-17L248 110.1l17 17L377 239l17 17-17 17z" />
    </Icon>
);

export default SquareArrowRight;