
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-up-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-up-down?s=regular arrows-up-down}
 * @preview ![arrows-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrows-up-down.svg)
 */
const ArrowsUpDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M177 7c-9.4-9.4-24.6-9.4-33.9 0L47 103c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 0 348.1L81 375c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l96 96c9.4 9.4 24.6 9.4 33.9 0l96-96c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55 0-348.1 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L177 7z" />
    </Icon>
);

export default ArrowsUpDown;