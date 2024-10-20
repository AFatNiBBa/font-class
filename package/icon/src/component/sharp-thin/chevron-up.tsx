
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-up?s=sharp-thin chevron-up}
 * @preview ![chevron-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chevron-up.svg)
 */
const ChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 108.7l5.7 5.7 208 208 5.7 5.7L464 339.3l-5.7-5.7L256 131.3 53.7 333.7 48 339.3 36.7 328l5.7-5.7 208-208 5.7-5.7z" />
    </Icon>
);

export default ChevronUp;