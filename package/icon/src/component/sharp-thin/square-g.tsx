
import { Icon } from "../../index";

/**
 * A component that renders the `square-g` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-g?s=sharp-thin square-g}
 * @preview ![square-g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-g.svg)
 */
const SquareG: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM112 256c0 61.9 50.1 112 112 112c59.2 0 107.6-45.9 111.7-104l-77.4 0-8 0 0-16 8 0 85.7 0 8 0 0 8c0 70.7-57.3 128-128 128s-128-57.3-128-128s57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6l6 5.3-10.7 11.9-6-5.3c-19.8-17.7-46-28.5-74.7-28.5c-61.9 0-112 50.1-112 112z" />
    </Icon>
);

export default SquareG;