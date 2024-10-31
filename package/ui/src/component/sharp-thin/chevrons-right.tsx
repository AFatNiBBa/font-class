
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-right?s=sharp-thin chevrons-right}
 * @preview ![chevrons-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chevrons-right.svg)
 */
const ChevronsRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M269.7 261.7l5.7-5.7-5.7-5.7-208-208L56 36.7 44.7 48l5.7 5.7L252.7 256 50.3 458.3 44.7 464 56 475.3l5.7-5.7 208-208zm192 0l5.7-5.7-5.7-5.7-208-208L248 36.7 236.7 48l5.7 5.7L444.7 256 242.3 458.3l-5.7 5.7L248 475.3l5.7-5.7 208-208z" />
    </Icon>
);

export default ChevronsRight;