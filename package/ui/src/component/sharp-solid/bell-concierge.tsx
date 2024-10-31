
import { Icon } from "../../index";

/**
 * A component that renders the `bell-concierge` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-concierge?s=sharp-solid bell-concierge}
 * @preview ![bell-concierge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bell-concierge.svg)
 */
const BellConcierge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M216 64l-24 0 0 48 24 0 16 0 0 33.3C119.6 157.2 32 252.4 32 368l448 0c0-115.6-87.6-210.8-200-222.7l0-33.3 16 0 24 0 0-48-24 0-40 0-40 0zM24 400L0 400l0 48 24 0 464 0 24 0 0-48-24 0L24 400z" />
    </Icon>
);

export default BellConcierge;