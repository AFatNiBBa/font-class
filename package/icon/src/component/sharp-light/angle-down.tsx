
import { Icon } from "../../index";

/**
 * A component that renders the `angle-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-down?s=sharp-light angle-down}
 * @preview ![angle-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/angle-down.svg)
 */
const AngleDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 374.6l11.3-11.3 160-160L406.6 192 384 169.4l-11.3 11.3L224 329.4 75.3 180.7 64 169.4 41.4 192l11.3 11.3 160 160L224 374.6z" />
    </Icon>
);

export default AngleDown;