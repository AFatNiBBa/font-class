
import { Icon } from "../../index";

/**
 * A component that renders the `bell-concierge` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-concierge?s=sharp-regular bell-concierge}
 * @preview ![bell-concierge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bell-concierge.svg)
 */
const BellConcierge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M216 64l-24 0 0 48 24 0 16 0 0 33.3C119.6 157.2 32 252.4 32 368l48 0c0-97.2 78.8-176 176-176s176 78.8 176 176l48 0c0-115.6-87.6-210.8-200-222.7l0-33.3 16 0 24 0 0-48-24 0-40 0-40 0zM24 400L0 400l0 48 24 0 464 0 24 0 0-48-24 0L24 400z" />
    </Icon>
);

export default BellConcierge;