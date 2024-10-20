
import { Icon } from "../../index";

/**
 * A component that renders the `less-than-equal` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than-equal?s=sharp-thin less-than-equal}
 * @preview ![less-than-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/less-than-equal.svg)
 */
const LessThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M36.9 184.6L416 28l0 17.3L61 192 416 338.7l0 17.3L36.9 199.4l-4.9-2 0-10.7 4.9-2zM8 464l432 0 8 0 0 16-8 0L8 480l-8 0 0-16 8 0z" />
    </Icon>
);

export default LessThanEqual;