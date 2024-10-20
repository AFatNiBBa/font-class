
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than-equal` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than-equal?s=sharp-light greater-than-equal}
 * @preview ![greater-than-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/greater-than-equal.svg)
 */
const GreaterThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M405.8 177.1L32 32l0 34.3L355.8 192 32 317.7 32 352 405.8 206.9l10.2-4 0-21.9-10.2-4zM432 448L16 448 0 448l0 32 16 0 416 0 16 0 0-32-16 0z" />
    </Icon>
);

export default GreaterThanEqual;