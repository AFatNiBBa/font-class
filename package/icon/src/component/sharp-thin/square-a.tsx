
import { Icon } from "../../index";

/**
 * A component that renders the `square-a` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-a?s=sharp-thin square-a}
 * @preview ![square-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-a.svg)
 */
const SquareA: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm218.9 96l10.1 0 2.2 4.6L350.2 384l-17.7 0-30.3-64-156.5 0-30.3 64-17.7 0 119-251.4 2.2-4.6zm75.7 176L224 154.7 153.3 304l141.3 0z" />
    </Icon>
);

export default SquareA;