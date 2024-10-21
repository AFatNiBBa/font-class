
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down?s=thin square-arrow-down}
 * @preview ![square-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-arrow-down.svg)
 */
const SquareArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l320 0c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464zM0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zm229.7-34.3l104-104c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L232 356.7 232 136c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 220.7-90.3-90.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l104 104c3.1 3.1 8.2 3.1 11.3 0z" />
    </Icon>
);

export default SquareArrowDown;