
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-small-big` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-small-big?s=solid arrow-down-small-big}
 * @preview ![arrow-down-small-big](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-down-small-big.svg)
 */
const ArrowDownSmallBig: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 480c9 0 17.5-3.8 23.6-10.4l88-96c11.9-13 11.1-33.3-2-45.2s-33.3-11.1-45.2 2L192 365.7 192 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 301.7L95.6 330.4c-11.9-13-32.2-13.9-45.2-2s-13.9 32.2-2 45.2l88 96C142.5 476.2 151 480 160 480zM320 80l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-64 0c-26.5 0-48 21.5-48 48zm48 176c-26.5 0-48 21.5-48 48l0 128c0 26.5 21.5 48 48 48l128 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48l-128 0z" />
    </Icon>
);

export default ArrowDownSmallBig;