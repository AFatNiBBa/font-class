
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flag-swallowtail` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-swallowtail?s=duotone flag-swallowtail}
 * @preview ![flag-swallowtail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/flag-swallowtail.svg)
 */
const FlagSwallowtail: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 32l0 320 360 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L352 192 443.2 70.4c3.1-4.2 4.8-9.2 4.8-14.4c0-13.3-10.7-24-24-24L64 32z" />
        <path d="M32 0C49.7 0 64 14.3 64 32l0 448c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0z" />
    </Icon>
);

export default FlagSwallowtail;