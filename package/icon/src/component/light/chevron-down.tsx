
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-down` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-down?s=light chevron-down}
 * @preview ![chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chevron-down.svg)
 */
const ChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M267.3 395.3c-6.2 6.2-16.4 6.2-22.6 0l-192-192c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 361.4 436.7 180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-192 192z" />
    </Icon>
);

export default ChevronDown;