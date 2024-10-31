
import { Icon } from "../../index";

/**
 * A component that renders the `flag-pennant` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-pennant?s=sharp-regular flag-pennant}
 * @preview ![flag-pennant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/flag-pennant.svg)
 */
const FlagPennant: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 24L48 0 0 0 0 24l0 8L0 80 0 304l0 48L0 488l0 24 48 0 0-24 0-137.3L382.9 217.8 448 192l-65.1-25.8L48 33.3 48 24zm0 60.9L317.9 192 48 299.1 48 84.9z" />
    </Icon>
);

export default FlagPennant;