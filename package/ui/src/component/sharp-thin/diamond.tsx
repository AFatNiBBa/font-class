
import { Icon } from "../../index";

/**
 * A component that renders the `diamond` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=sharp-thin diamond}
 * @preview ![diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/diamond.svg)
 */
const Diamond: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256l11.3 11.3L244.7 500.7 256 512l11.3-11.3L500.7 267.3 512 256l-11.3-11.3L267.3 11.3 256 0 244.7 11.3 11.3 244.7 0 256zM256 489.4L22.6 256 256 22.6 489.4 256 256 489.4z" />
    </Icon>
);

export default Diamond;