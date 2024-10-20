
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-down` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-down?s=solid chevron-down}
 * @preview ![chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chevron-down.svg)
 */
const ChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
    </Icon>
);

export default ChevronDown;