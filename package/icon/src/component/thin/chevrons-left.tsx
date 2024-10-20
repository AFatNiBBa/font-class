
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-left?s=thin chevrons-left}
 * @preview ![chevrons-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chevrons-left.svg)
 */
const ChevronsLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M50.3 250.3c-3.1 3.1-3.1 8.2 0 11.3l216 216c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L67.3 256 277.7 45.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-216 216zm408-216l-216 216c-3.1 3.1-3.1 8.2 0 11.3l216 216c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L259.3 256 469.7 45.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0z" />
    </Icon>
);

export default ChevronsLeft;