
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-up?s=sharp-thin chevrons-up}
 * @preview ![chevrons-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chevrons-up.svg)
 */
const ChevronsUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M261.7 50.3L256 44.7l-5.7 5.7-208 208L36.7 264 48 275.3l5.7-5.7L256 67.3 458.3 269.7l5.7 5.7L475.3 264l-5.7-5.7-208-208zm0 192l-5.7-5.7-5.7 5.7-208 208L36.7 456 48 467.3l5.7-5.7L256 259.3 458.3 461.7l5.7 5.7L475.3 456l-5.7-5.7-208-208z" />
    </Icon>
);

export default ChevronsUp;