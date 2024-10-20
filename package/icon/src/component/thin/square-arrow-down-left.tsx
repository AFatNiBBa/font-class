
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-down-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down-left?s=thin square-arrow-down-left}
 * @preview ![square-arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-arrow-down-left.svg)
 */
const SquareArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l320 0c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464zM0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zm280-64c4.4 0 8-3.6 8-8s-3.6-8-8-8l-124.7 0L317.7 173.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L144 324.7 144 200c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 144c0 4.4 3.6 8 8 8l144 0z" />
    </Icon>
);

export default SquareArrowDownLeft;