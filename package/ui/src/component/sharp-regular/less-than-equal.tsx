
import { Icon } from "../../index";

/**
 * A component that renders the `less-than-equal` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than-equal?s=sharp-regular less-than-equal}
 * @preview ![less-than-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/less-than-equal.svg)
 */
const LessThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M47.6 169.5L416 32.3l0 51.2L124.8 192 416 300.5l0 51.2L47.6 214.5 32 208.7l0-33.3 15.6-5.8zM24 432l400 0 24 0 0 48-24 0L24 480 0 480l0-48 24 0z" />
    </Icon>
);

export default LessThanEqual;