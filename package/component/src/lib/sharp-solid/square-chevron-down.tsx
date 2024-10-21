
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-down?s=sharp-solid square-chevron-down}
 * @preview ![square-chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-chevron-down.svg)
 */
const SquareChevronDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 480l448 0 0-448L0 32 0 480zM207 345L103 241l-17-17L120 190.1l17 17 87 87 87-87 17-17L361.9 224l-17 17L241 345l-17 17-17-17z" />
    </Icon>
);

export default SquareChevronDown;