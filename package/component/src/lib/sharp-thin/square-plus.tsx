
import { Icon } from "../../index";

/**
 * A component that renders the `square-plus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-plus?s=sharp-thin square-plus}
 * @preview ![square-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-plus.svg)
 */
const SquarePlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM232 160l0 8 0 80 80 0 8 0 0 16-8 0-80 0 0 80 0 8-16 0 0-8 0-80-80 0-8 0 0-16 8 0 80 0 0-80 0-8 16 0z" />
    </Icon>
);

export default SquarePlus;