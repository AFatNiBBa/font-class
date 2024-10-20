
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-big-small` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-big-small?s=regular arrow-down-big-small}
 * @preview ![arrow-down-big-small](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-down-big-small.svg)
 */
const ArrowDownBigSmall: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M143 473L47 377c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55 55L136 56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 342.1 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-96 96c-9.4 9.4-24.6 9.4-33.9 0zM368 368l0 64 64 0 0-64-64 0zm-48 0c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-64 0c-26.5 0-48-21.5-48-48l0-64zm48-160l128 0 0-128L368 80l0 128zm-48 0l0-128c0-26.5 21.5-48 48-48l128 0c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-128 0c-26.5 0-48-21.5-48-48z" />
    </Icon>
);

export default ArrowDownBigSmall;