
import { Icon } from "../../index";

/**
 * A component that renders the `flag-swallowtail` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-swallowtail?s=sharp-thin flag-swallowtail}
 * @preview ![flag-swallowtail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/flag-swallowtail.svg)
 */
const FlagSwallowtail: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 8l0-8L0 0 0 8 0 32 0 48 0 336l0 16L0 504l0 8 16 0 0-8 0-152 412.5 0 19.5 0-11.2-16L336 192 436.8 48 448 32l-19.5 0L16 32 16 8zm0 40l401.3 0L322.9 182.8l-6.4 9.2 6.4 9.2L417.3 336 16 336 16 48z" />
    </Icon>
);

export default FlagSwallowtail;