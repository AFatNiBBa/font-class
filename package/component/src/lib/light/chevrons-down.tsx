
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-down` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-down?s=light chevrons-down}
 * @preview ![chevrons-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chevrons-down.svg)
 */
const ChevronsDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M52.7 75.3l192 192c6.2 6.2 16.4 6.2 22.6 0l192-192c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L256 233.4 75.3 52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6zm0 192l192 192c6.2 6.2 16.4 6.2 22.6 0l192-192c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L256 425.4 75.3 244.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6z" />
    </Icon>
);

export default ChevronsDown;