
import { Icon } from "../../index";

/**
 * A component that renders the `flag-pennant` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-pennant?s=sharp-light flag-pennant}
 * @preview ![flag-pennant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/flag-pennant.svg)
 */
const FlagPennant: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 16L32 0 0 0 0 16 0 32 0 64 0 320l0 32L0 496l0 16 32 0 0-16 0-145.2L403.1 209.1 448 192l-44.9-17.1L32 33.2 32 16zm0 51.5L358.3 192 32 316.5 32 67.5z" />
    </Icon>
);

export default FlagPennant;