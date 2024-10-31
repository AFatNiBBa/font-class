
import { Icon } from "../../index";

/**
 * A component that renders the `less-than-equal` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than-equal?s=sharp-light less-than-equal}
 * @preview ![less-than-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/less-than-equal.svg)
 */
const LessThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M42.2 177.1L416 32l0 34.3L92.2 192 416 317.7l0 34.3L42.2 206.9 32 203 32 181l10.2-4zM16 448l416 0 16 0 0 32-16 0L16 480 0 480l0-32 16 0z" />
    </Icon>
);

export default LessThanEqual;