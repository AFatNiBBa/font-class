
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-right?s=light chevrons-right}
 * @preview ![chevrons-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chevrons-right.svg)
 */
const ChevronsRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M75.3 459.3l192-192c6.2-6.2 6.2-16.4 0-22.6l-192-192c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L233.4 256 52.7 436.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0zm192 0l192-192c6.2-6.2 6.2-16.4 0-22.6l-192-192c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L425.4 256 244.7 436.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z" />
    </Icon>
);

export default ChevronsRight;