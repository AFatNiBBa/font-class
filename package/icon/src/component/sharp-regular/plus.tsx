
import { Icon } from "../../index";

/**
 * A component that renders the `plus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus?s=sharp-regular plus}
 * @preview ![plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/plus.svg)
 */
const Plus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M248 72l0-24-48 0 0 24 0 160L40 232l-24 0 0 48 24 0 160 0 0 160 0 24 48 0 0-24 0-160 160 0 24 0 0-48-24 0-160 0 0-160z" />
    </Icon>
);

export default Plus;