
import { Icon } from "../../index";

/**
 * A component that renders the `square-y` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-y?s=sharp-thin square-y}
 * @preview ![square-y](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-y.svg)
 */
const SquareY: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM216 274.9L93.3 128l20.8 0L224 259.5 333.9 128l20.8 0L232 274.9 232 376l0 8-16 0 0-8 0-101.1z" />
    </Icon>
);

export default SquareY;