
import { Icon } from "../../index";

/**
 * A component that renders the `less-than-equal` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than-equal?s=solid less-than-equal}
 * @preview ![less-than-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/less-than-equal.svg)
 */
const LessThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M395.9 93.7c16.4-6.6 24.4-25.2 17.8-41.6s-25.2-24.4-41.6-17.8l-320 128C40 167.1 32 178.9 32 192s8 24.9 20.1 29.7l320 128c16.4 6.6 35-1.4 41.6-17.8s-1.4-35-17.8-41.6L150.2 192 395.9 93.7zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416z" />
    </Icon>
);

export default LessThanEqual;