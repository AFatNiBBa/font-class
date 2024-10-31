
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevrons-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-up?s=duotone chevrons-up}
 * @preview ![chevrons-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chevrons-up.svg)
 */
const ChevronsUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 448c0 8.2 3.1 16.4 9.4 22.6c12.5 12.5 32.8 12.5 45.3 0L256 301.3 425.4 470.6c12.5 12.5 32.8 12.5 45.3 0c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6l-192-192c-6.2-6.2-14.4-9.4-22.6-9.4s-16.4 3.1-22.6 9.4l-192 192C35.1 431.6 32 439.8 32 448z" />
        <path d="M233.4 41.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3 86.6 278.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
    </Icon>
);

export default ChevronsUp;