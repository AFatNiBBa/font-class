
import { Icon } from "../../index";

/**
 * A component that renders the `sort-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-up?s=sharp-solid sort-up}
 * @preview ![sort-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sort-up.svg)
 */
const SortUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 176L160 32 320 176v48H0V176z" />
    </Icon>
);

export default SortUp;