
import { Icon } from "../../index";

/**
 * A component that renders the `square-t` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-t?s=sharp-thin square-t}
 * @preview ![square-t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-t.svg)
 */
const SquareT: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM104 144l120 0 120 0 8 0 0 16-8 0-112 0 0 232 0 8-16 0 0-8 0-232-112 0-8 0 0-16 8 0z" />
    </Icon>
);

export default SquareT;