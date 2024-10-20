
import { Icon } from "../../index";

/**
 * A component that renders the `hand-holding` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding?s=solid hand-holding}
 * @preview ![hand-holding](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/hand-holding.svg)
 */
const HandHolding: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M559.7 392.2c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416 272 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-16 0-78.3 0c-29.1 0-57.3 9.9-80 28L68.8 384 32 384c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l160 0 160.5 0c29 0 57.3-9.3 80.7-26.5l126.6-93.3zm-367-8.2c.3 0 .6 0 .9 0c0 0 0 0 0 0c-.3 0-.6 0-.9 0z" />
    </Icon>
);

export default HandHolding;