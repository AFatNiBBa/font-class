
import { Icon } from "../../index";

/**
 * A component that renders the `square-l` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-l?s=sharp-solid square-l}
 * @preview ![square-l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-l.svg)
 */
const SquareL: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM176 152l0 184 120 0 24 0 0 48-24 0-144 0-24 0 0-24 0-208 0-24 48 0 0 24z" />
    </Icon>
);

export default SquareL;