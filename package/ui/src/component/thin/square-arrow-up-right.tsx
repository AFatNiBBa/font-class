
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-up-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-up-right?s=thin square-arrow-up-right}
 * @preview ![square-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-arrow-up-right.svg)
 */
const SquareArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l320 0zm64 48c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM168 160c-4.4 0-8 3.6-8 8s3.6 8 8 8l124.7 0L130.3 338.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L304 187.3 304 312c0 4.4 3.6 8 8 8s8-3.6 8-8l0-144c0-4.4-3.6-8-8-8l-144 0z" />
    </Icon>
);

export default SquareArrowUpRight;