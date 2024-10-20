
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-d` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-d?s=sharp-duotone-solid square-d}
 * @preview ![square-d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-d.svg)
 */
const SquareD: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm128 96l24 0 72 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-72 0-24 0 0-24 0-208 0-24zm48 48l0 160 48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0z" />
        <path d="M128 128l24 0 72 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-72 0-24 0 0-24 0-208 0-24zm48 48l0 160 48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0z" />
    </Icon>
);

export default SquareD;