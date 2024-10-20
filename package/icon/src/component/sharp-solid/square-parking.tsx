
import { Icon } from "../../index";

/**
 * A component that renders the `square-parking` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-parking?s=sharp-solid square-parking}
 * @preview ![square-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-parking.svg)
 */
const SquareParking: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM160 128l80 0c53 0 96 43 96 96l0 32-5.5 0c-13.2 37.3-48.7 64-90.5 64l-48 0 0 32 0 32-64 0 0-32 0-32 0-64 0-96 0-32 32 0zm80 128c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0 0 64 48 0z" />
    </Icon>
);

export default SquareParking;