
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-down?s=thin chevrons-down}
 * @preview ![chevrons-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chevrons-down.svg)
 */
const ChevronsDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M34.3 53.7l216 216c3.1 3.1 8.2 3.1 11.3 0l216-216c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L256 252.7 45.7 42.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3zm0 192l216 216c3.1 3.1 8.2 3.1 11.3 0l216-216c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L256 444.7 45.7 234.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3z" />
    </Icon>
);

export default ChevronsDown;