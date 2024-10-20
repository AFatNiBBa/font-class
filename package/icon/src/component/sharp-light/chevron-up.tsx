
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-up?s=sharp-light chevron-up}
 * @preview ![chevron-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chevron-up.svg)
 */
const ChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 105.4l11.3 11.3 192 192L470.6 320 448 342.6l-11.3-11.3L256 150.6 75.3 331.3 64 342.6 41.4 320l11.3-11.3 192-192L256 105.4z" />
    </Icon>
);

export default ChevronUp;