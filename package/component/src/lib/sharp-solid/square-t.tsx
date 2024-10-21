
import { Icon } from "../../index";

/**
 * A component that renders the `square-t` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-t?s=sharp-solid square-t}
 * @preview ![square-t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-t.svg)
 */
const SquareT: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM120 144l104 0 104 0 24 0 0 48-24 0-80 0 0 168 0 24-48 0 0-24 0-168-80 0-24 0 0-48 24 0z" />
    </Icon>
);

export default SquareT;