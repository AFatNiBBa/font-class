
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-right?s=thin chevrons-right}
 * @preview ![chevrons-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chevrons-right.svg)
 */
const ChevronsRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M53.7 477.7l216-216c3.1-3.1 3.1-8.2 0-11.3l-216-216c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L252.7 256 42.3 466.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0zm192 0l216-216c3.1-3.1 3.1-8.2 0-11.3l-216-216c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L444.7 256 234.3 466.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0z" />
    </Icon>
);

export default ChevronsRight;