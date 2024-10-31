
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis?s=sharp-thin ellipsis}
 * @preview ![ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ellipsis.svg)
 */
const Ellipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 272l0-32 32 0 0 32-32 0zm128 0l0-32 32 0 0 32-32 0zm128-32l32 0 0 32-32 0 0-32z" />
    </Icon>
);

export default Ellipsis;