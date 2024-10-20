
import { Icon } from "../../index";

/**
 * A component that renders the `flag-swallowtail` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-swallowtail?s=sharp-solid flag-swallowtail}
 * @preview ![flag-swallowtail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/flag-swallowtail.svg)
 */
const FlagSwallowtail: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32L64 0 0 0 0 32 0 480l0 32 64 0 0-32 0-128 384 0L352 192 448 32 64 32z" />
    </Icon>
);

export default FlagSwallowtail;