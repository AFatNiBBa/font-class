
import { Icon } from "../../index";

/**
 * A component that renders the `flag-pennant` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-pennant?s=sharp-thin flag-pennant}
 * @preview ![flag-pennant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/flag-pennant.svg)
 */
const FlagPennant: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 8l0-8L0 0 0 8 0 32 0 48 0 336l0 16L0 504l0 8 16 0 0-8 0-152L425 200.5l23-8.5-23-8.5L16 32 16 8zm0 41.1L401.9 192 16 334.9 16 49.1z" />
    </Icon>
);

export default FlagPennant;