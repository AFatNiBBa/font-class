
import { Icon } from "../../index";

/**
 * A component that renders the `not-equal` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/not-equal?s=solid not-equal}
 * @preview ![not-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/not-equal.svg)
 */
const NotEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M369.8 37.4c14.7 9.8 18.7 29.7 8.9 44.4L337.1 144l62.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-105.5 0-64 96L400 304c17.7 0 32 14.3 32 32s-14.3 32-32 32l-212.2 0-65.2 97.7c-9.8 14.7-29.7 18.7-44.4 8.9s-18.7-29.7-8.9-44.4L110.9 368 48 368c-17.7 0-32-14.3-32-32s14.3-32 32-32l105.5 0 64-96L48 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l212.2 0 65.2-97.7c9.8-14.7 29.7-18.7 44.4-8.9z" />
    </Icon>
);

export default NotEqual;