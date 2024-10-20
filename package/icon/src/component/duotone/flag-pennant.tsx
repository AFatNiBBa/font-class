
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flag-pennant` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-pennant?s=duotone flag-pennant}
 * @preview ![flag-pennant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/flag-pennant.svg)
 */
const FlagPennant: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 32L433 170.4c9 3.4 15 12 15 21.6s-6 18.2-15 21.6L64 352 64 32z" />
        <path d="M32 0C49.7 0 64 14.3 64 32l0 448c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0z" />
    </Icon>
);

export default FlagPennant;