
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-arrow-down` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-arrow-down?s=solid arrow-up-arrow-down}
 * @preview ![arrow-up-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-up-arrow-down.svg)
 */
const ArrowUpArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 141.3 128 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96zm352 333.3c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L448 370.7 448 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96z" />
    </Icon>
);

export default ArrowUpArrowDown;