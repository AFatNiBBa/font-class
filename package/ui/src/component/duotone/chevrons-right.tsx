
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevrons-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-right?s=duotone chevrons-right}
 * @preview ![chevrons-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chevrons-right.svg)
 */
const ChevronsRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 448c0 8.2 3.1 16.4 9.4 22.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3l-192-192C80.4 35.1 72.2 32 64 32s-16.4 3.1-22.6 9.4c-12.5 12.5-12.5 32.8 0 45.3L210.7 256 41.4 425.4C35.1 431.6 32 439.8 32 448z" />
        <path d="M470.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 256 233.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </Icon>
);

export default ChevronsRight;