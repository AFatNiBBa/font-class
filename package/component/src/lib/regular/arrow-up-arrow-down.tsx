
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-arrow-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-arrow-down?s=regular arrow-up-arrow-down}
 * @preview ![arrow-up-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-up-arrow-down.svg)
 */
const ArrowUpArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M529 377c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55L440 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 342.1-55-55c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l96 96c9.4 9.4 24.6 9.4 33.9 0l96-96zM177 39c-9.4-9.4-24.6-9.4-33.9 0L47 135c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55L136 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-342.1 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L177 39z" />
    </Icon>
);

export default ArrowUpArrowDown;