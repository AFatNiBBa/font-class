
import { Icon } from "../../index";

/**
 * A component that renders the `square-parking` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-parking?s=sharp-light square-parking}
 * @preview ![square-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-parking.svg)
 */
const SquareParking: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm160 96l96 0c53 0 96 43 96 96s-43 96-96 96l-80 0 0 48 0 16-32 0 0-16 0-64 0-160 0-16 16 0zm96 160c35.3 0 64-28.7 64-64s-28.7-64-64-64l-80 0 0 128 80 0z" />
    </Icon>
);

export default SquareParking;