
import { Icon } from "../../index";

/**
 * A component that renders the `gavel` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gavel?s=sharp-solid gavel}
 * @preview ![gavel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/gavel.svg)
 */
const Gavel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M344 56L320 80 432 192l24-24 56 56L368 368l-56-56 24-24L224 176l-24 24-56-56L288 0l56 56zM214.6 342.6L232 360 80 512 0 432 152 280l17.4 17.4L234.7 232 280 277.3l-65.4 65.4z" />
    </Icon>
);

export default Gavel;