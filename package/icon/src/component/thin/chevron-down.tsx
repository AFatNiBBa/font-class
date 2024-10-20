
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-down?s=thin chevron-down}
 * @preview ![chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chevron-down.svg)
 */
const ChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M250.3 397.7c3.1 3.1 8.2 3.1 11.3 0l216-216c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L256 380.7 45.7 170.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l216 216z" />
    </Icon>
);

export default ChevronDown;