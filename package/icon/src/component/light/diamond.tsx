
import { Icon } from "../../index";

/**
 * A component that renders the `diamond` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=light diamond}
 * @preview ![diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/diamond.svg)
 */
const Diamond: typeof Icon = x => (
    <Icon {...x}>
        <path d="M250.3 34.3c3.1-3.1 8.2-3.1 11.3 0l216 216c3.1 3.1 3.1 8.2 0 11.3l-216 216c-3.1 3.1-8.2 3.1-11.3 0l-216-216c-3.1-3.1-3.1-8.2 0-11.3l216-216zm33.9-22.6c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" />
    </Icon>
);

export default Diamond;