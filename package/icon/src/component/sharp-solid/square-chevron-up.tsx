
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-up?s=sharp-solid square-chevron-up}
 * @preview ![square-chevron-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-chevron-up.svg)
 */
const SquareChevronUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM241 167L345 271l17 17L328 321.9l-17-17-87-87-87 87-17 17L86.1 288l17-17L207 167l17-17 17 17z" />
    </Icon>
);

export default SquareChevronUp;