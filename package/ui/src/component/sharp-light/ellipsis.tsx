
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis?s=sharp-light ellipsis}
 * @preview ![ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ellipsis.svg)
 */
const Ellipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 288l0-64 64 0 0 64-64 0zm160 0l0-64 64 0 0 64-64 0zm160-64l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default Ellipsis;