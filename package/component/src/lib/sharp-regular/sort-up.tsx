
import { Icon } from "../../index";

/**
 * A component that renders the `sort-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-up?s=sharp-regular sort-up}
 * @preview ![sort-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sort-up.svg)
 */
const SortUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 224L0 224l0-48L160 32 320 176l0 48-48 0L48 224zm200.2-48L160 96.6 71.8 176l176.5 0z" />
    </Icon>
);

export default SortUp;