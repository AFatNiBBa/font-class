
import { Icon } from "../../index";

/**
 * A component that renders the `stairs` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stairs?s=sharp-thin stairs}
 * @preview ![stairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/stairs.svg)
 */
const Stairs: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M424 32l8 0 136 0 8 0 0 16-8 0L440 48l0 136 0 8-8 0-136 0 0 136 0 8-8 0-136 0 0 136 0 8-8 0L8 480l-8 0 0-16 8 0 128 0 0-136 0-8 8 0 136 0 0-136 0-8 8 0 136 0 0-136 0-8z" />
    </Icon>
);

export default Stairs;