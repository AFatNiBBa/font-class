
import { Icon } from "../../index";

/**
 * A component that renders the `square-x` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-x?s=sharp-thin square-x}
 * @preview ![square-x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-x.svg)
 */
const SquareX: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm109.6 96l20.6 0L224 243.3 317.8 128l20.6 0L234.3 256 338.4 384l-20.6 0L224 268.7 130.2 384l-20.6 0L213.7 256 109.6 128z" />
    </Icon>
);

export default SquareX;