
import { Icon } from "../../index";

/**
 * A component that renders the `shutters` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shutters?s=sharp-solid shutters}
 * @preview ![shutters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shutters.svg)
 */
const Shutters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32L0 32 0 96l32 0 448 0 32 0 0-64-32 0L32 32zM0 224l512 0-24-96L24 128 0 224zM512 352l-24-96L24 256 0 352l512 0zM0 480l512 0-24-96L24 384 0 480z" />
    </Icon>
);

export default Shutters;