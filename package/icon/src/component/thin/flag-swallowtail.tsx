
import { Icon } from "../../index";

/**
 * A component that renders the `flag-swallowtail` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-swallowtail?s=thin flag-swallowtail}
 * @preview ![flag-swallowtail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/flag-swallowtail.svg)
 */
const FlagSwallowtail: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8L0 32 0 48 0 336l0 16L0 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-152 420.1 0c6.6 0 11.9-5.3 11.9-11.9c0-2.6-.9-5.2-2.5-7.3L336 192 445.5 51.2c1.6-2.1 2.5-4.7 2.5-7.3c0-6.6-5.3-11.9-11.9-11.9L16 32 16 8zm0 40l411.7 0L323.4 182.2c-4.5 5.8-4.5 13.9 0 19.6L427.7 336 16 336 16 48z" />
    </Icon>
);

export default FlagSwallowtail;