
import { Icon } from "../../index";

/**
 * A component that renders the `square-b` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-b?s=sharp-thin square-b}
 * @preview ![square-b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-b.svg)
 */
const SquareB: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm128 96l8 0 100 0c37.6 0 68 30.4 68 68c0 22.1-10.6 41.8-26.9 54.2c29.3 7.6 50.9 34.2 50.9 65.8c0 37.6-30.4 68-68 68l-124 0-8 0 0-8 0-112 0-8 0-8 0-112 0-8zm160 68c0-28.7-23.3-52-52-52l-92 0 0 104 92 0c28.7 0 52-23.3 52-52zM144 368l116 0c28.7 0 52-23.3 52-52s-23.3-52-52-52l-24 0-92 0 0 104z" />
    </Icon>
);

export default SquareB;