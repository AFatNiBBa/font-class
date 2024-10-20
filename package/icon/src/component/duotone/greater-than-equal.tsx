
import { Icon, generic } from "../../index";

/**
 * A component that renders the `greater-than-equal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than-equal?s=duotone greater-than-equal}
 * @preview ![greater-than-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/greater-than-equal.svg)
 */
const GreaterThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M34.3 52.1c6.6-16.4 25.2-24.4 41.6-17.8l320 128C408 167.1 416 178.9 416 192s-8 24.9-20.1 29.7l-320 128c-16.4 6.6-35-1.4-41.6-17.8s1.4-35 17.8-41.6L297.8 192 52.1 93.7C35.7 87.1 27.7 68.5 34.3 52.1z" />
        <path d="M448 448c0-17.7-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32z" />
    </Icon>
);

export default GreaterThanEqual;