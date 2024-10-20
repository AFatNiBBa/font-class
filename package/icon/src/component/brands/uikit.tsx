
import { Icon } from "../../index";

/**
 * A component that renders the `uikit` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/uikit?s=brands uikit}
 * @preview ![uikit](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/uikit.svg)
 */
const Uikit: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M443.9 128v256L218 512 0 384V169.7l87.6 45.1v117l133.5 75.5 135.8-75.5v-151l-101.1-57.6 87.6-53.1L443.9 128zM308.6 49.1L223.8 0l-88.6 54.8 86 47.3 87.4-53z" />
    </Icon>
);

export default Uikit;