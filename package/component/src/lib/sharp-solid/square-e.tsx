
import { Icon } from "../../index";

/**
 * A component that renders the `square-e` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-e?s=sharp-solid square-e}
 * @preview ![square-e](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-e.svg)
 */
const SquareE: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM152 128l144 0 24 0 0 48-24 0-120 0 0 56 88 0 24 0 0 48-24 0-88 0 0 56 120 0 24 0 0 48-24 0-144 0-24 0 0-24 0-104 0-104 0-24 24 0z" />
    </Icon>
);

export default SquareE;