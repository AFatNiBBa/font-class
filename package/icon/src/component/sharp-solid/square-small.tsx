
import { Icon } from "../../index";

/**
 * A component that renders the `square-small` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-small?s=sharp-solid square-small}
 * @preview ![square-small](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-small.svg)
 */
const SquareSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 96H320V416H0V96z" />
    </Icon>
);

export default SquareSmall;