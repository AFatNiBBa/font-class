
import { Icon } from "../../index";

/**
 * A component that renders the `square-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up?s=sharp-solid square-up}
 * @preview ![square-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-up.svg)
 */
const SquareUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM352 256l-80 0 0 128-96 0 0-128-80 0 0-16L224 112 352 240l0 16z" />
    </Icon>
);

export default SquareUp;