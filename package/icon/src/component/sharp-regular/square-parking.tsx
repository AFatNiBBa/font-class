
import { Icon } from "../../index";

/**
 * A component that renders the `square-parking` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-parking?s=sharp-regular square-parking}
 * @preview ![square-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-parking.svg)
 */
const SquareParking: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zm160 96l88 0c53 0 96 43 96 96s-43 96-96 96l-64 0 0 64-48 0 0-64 0-48 0-120 0-24 24 0zm88 144c26.5 0 48-21.5 48-48s-21.5-48-48-48l-64 0 0 96 64 0z" />
    </Icon>
);

export default SquareParking;