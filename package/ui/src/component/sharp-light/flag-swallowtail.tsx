
import { Icon } from "../../index";

/**
 * A component that renders the `flag-swallowtail` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-swallowtail?s=sharp-light flag-swallowtail}
 * @preview ![flag-swallowtail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/flag-swallowtail.svg)
 */
const FlagSwallowtail: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 16L32 0 0 0 0 16 0 32 0 64 0 320l0 32L0 496l0 16 32 0 0-16 0-144 378.7 0 37.3 0-19.2-32L352 192 428.8 64 448 32l-37.3 0L32 32l0-16zm0 48l359.5 0L324.6 175.5 314.7 192l9.9 16.5L391.5 320 32 320 32 64z" />
    </Icon>
);

export default FlagSwallowtail;