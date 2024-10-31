
import { Icon } from "../../index";

/**
 * A component that renders the `stairs` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stairs?s=sharp-regular stairs}
 * @preview ![stairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/stairs.svg)
 */
const Stairs: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M384 32l24 0 144 0 24 0 0 48-24 0L432 80l0 120 0 24-24 0-104 0 0 104 0 24-24 0-104 0 0 104 0 24-24 0L24 480 0 480l0-48 24 0 104 0 0-104 0-24 24 0 104 0 0-104 0-24 24 0 104 0 0-120 0-24z" />
    </Icon>
);

export default Stairs;