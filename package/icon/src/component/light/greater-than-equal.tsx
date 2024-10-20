
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than-equal` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than-equal?s=light greater-than-equal}
 * @preview ![greater-than-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/greater-than-equal.svg)
 */
const GreaterThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M41.9 62.8c-8.2-3.3-12.1-12.7-8.8-20.9s12.7-12.1 20.9-8.8l352 144c6 2.5 9.9 8.3 9.9 14.8s-3.9 12.3-9.9 14.8l-352 144c-8.2 3.3-17.5-.6-20.9-8.8s.6-17.5 8.8-20.9L357.7 192 41.9 62.8zM432 448c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 480c-8.8 0-16-7.2-16-16s7.2-16 16-16l416 0z" />
    </Icon>
);

export default GreaterThanEqual;