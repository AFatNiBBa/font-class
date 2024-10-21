
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-up?s=sharp-regular chevron-up}
 * @preview ![chevron-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chevron-up.svg)
 */
const ChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 94.1l17 17L465 303l17 17L448 353.9l-17-17-175-175L81 337l-17 17L30.1 320l17-17L239 111l17-17z" />
    </Icon>
);

export default ChevronUp;