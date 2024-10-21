
import { Icon } from "../../index";

/**
 * A component that renders the `flag-pennant` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-pennant?s=sharp-solid flag-pennant}
 * @preview ![flag-pennant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/flag-pennant.svg)
 */
const FlagPennant: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32L64 0 0 0 0 32 0 480l0 32 64 0 0-32 0-128L448 192 64 32z" />
    </Icon>
);

export default FlagPennant;