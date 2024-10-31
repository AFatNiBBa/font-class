
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-down-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down-left?s=regular square-arrow-down-left}
 * @preview ![square-arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-arrow-down-left.svg)
 */
const SquareArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432zM0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zm288-48c13.3 0 24-10.7 24-24s-10.7-24-24-24l-94.1 0L329 185c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-135 135L160 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 160c0 13.3 10.7 24 24 24l152 0z" />
    </Icon>
);

export default SquareArrowDownLeft;