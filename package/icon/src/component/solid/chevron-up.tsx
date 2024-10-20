
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-up` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-up?s=solid chevron-up}
 * @preview ![chevron-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chevron-up.svg)
 */
const ChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
    </Icon>
);

export default ChevronUp;