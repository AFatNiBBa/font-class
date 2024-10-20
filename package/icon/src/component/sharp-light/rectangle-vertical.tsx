
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-vertical` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical?s=sharp-light rectangle-vertical}
 * @preview ![rectangle-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rectangle-vertical.svg)
 */
const RectangleVertical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 480L32 480 32 32l320 0 0 448zM384 32l0-32L352 0 32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-448z" />
    </Icon>
);

export default RectangleVertical;