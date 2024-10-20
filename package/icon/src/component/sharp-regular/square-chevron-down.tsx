
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-down?s=sharp-regular square-chevron-down}
 * @preview ![square-chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-chevron-down.svg)
 */
const SquareChevronDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80L48 80l0 352 352 0 0-352zm48-48l0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32l48 0 352 0 48 0zM207 345L103 241l-17-17L120 190.1l17 17 87 87 87-87 17-17L361.9 224l-17 17L241 345l-17 17-17-17z" />
    </Icon>
);

export default SquareChevronDown;