
import { Icon } from "../../index";

/**
 * A component that renders the `diamond` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=thin diamond}
 * @preview ![diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/diamond.svg)
 */
const Diamond: typeof Icon = x => (
    <Icon {...x}>
        <path d="M239 23c9.4-9.4 24.6-9.4 33.9 0L489 239c9.4 9.4 9.4 24.6 0 33.9L273 489c-9.4 9.4-24.6 9.4-33.9 0L23 273c-9.4-9.4-9.4-24.6 0-33.9L239 23zm45.3-11.3c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" />
    </Icon>
);

export default Diamond;