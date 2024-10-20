
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flag-pennant` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-pennant?s=sharp-duotone-solid flag-pennant}
 * @preview ![flag-pennant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/flag-pennant.svg)
 */
const FlagPennant: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 32L448 192 64 352 64 32z" />
        <path d="M64 0l0 32 0 448 0 32L0 512l0-32L0 32 0 0 64 0z" />
    </Icon>
);

export default FlagPennant;