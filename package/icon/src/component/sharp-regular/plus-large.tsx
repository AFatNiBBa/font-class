
import { Icon } from "../../index";

/**
 * A component that renders the `plus-large` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-large?s=sharp-regular plus-large}
 * @preview ![plus-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/plus-large.svg)
 */
const PlusLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M488 232l24 0 0 48-24 0-208 0 0 208 0 24-48 0 0-24 0-208L24 280 0 280l0-48 24 0 208 0 0-208 0-24 48 0 0 24 0 208 208 0z" />
    </Icon>
);

export default PlusLarge;