
import { Icon } from "../../index";

/**
 * A component that renders the `square-d` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-d?s=sharp-solid square-d}
 * @preview ![square-d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-d.svg)
 */
const SquareD: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM152 128l72 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-72 0-24 0 0-24 0-208 0-24 24 0zm24 208l48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0 0 160z" />
    </Icon>
);

export default SquareD;