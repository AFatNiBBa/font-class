
import { Icon } from "../../index";

/**
 * A component that renders the `stairs` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stairs?s=sharp-solid stairs}
 * @preview ![stairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/stairs.svg)
 */
const Stairs: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M384 32l32 0 128 0 32 0 0 64-32 0-96 0 0 96 0 32-32 0-96 0 0 96 0 32-32 0-96 0 0 96 0 32-32 0L32 480 0 480l0-64 32 0 96 0 0-96 0-32 32 0 96 0 0-96 0-32 32 0 96 0 0-96 0-32z" />
    </Icon>
);

export default Stairs;