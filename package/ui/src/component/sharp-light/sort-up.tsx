
import { Icon } from "../../index";

/**
 * A component that renders the `sort-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-up?s=sharp-light sort-up}
 * @preview ![sort-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sort-up.svg)
 */
const SortUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 192l256 0 0-1.7L160 75.1 32 190.3l0 1.7zm0 32L0 224l0-32 0-16L160 32 320 176l0 16 0 32-32 0L32 224z" />
    </Icon>
);

export default SortUp;