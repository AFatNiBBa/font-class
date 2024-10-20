
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis?s=sharp-regular ellipsis}
 * @preview ![ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ellipsis.svg)
 */
const Ellipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 296l0-80 80 0 0 80-80 0zm160 0l0-80 80 0 0 80-80 0zm160-80l80 0 0 80-80 0 0-80z" />
    </Icon>
);

export default Ellipsis;