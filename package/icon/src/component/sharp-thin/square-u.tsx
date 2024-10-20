
import { Icon } from "../../index";

/**
 * A component that renders the `square-u` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-u?s=sharp-thin square-u}
 * @preview ![square-u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-u.svg)
 */
const SquareU: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM128 152l0 136c0 53 43 96 96 96s96-43 96-96l0-136 0-8 16 0 0 8 0 136c0 59.2-45.9 107.6-104 111.7l0 .3-8 0c-61.9 0-112-50.1-112-112l0-136 0-8 16 0 0 8z" />
    </Icon>
);

export default SquareU;