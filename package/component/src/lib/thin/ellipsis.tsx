
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis?s=thin ellipsis}
 * @preview ![ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ellipsis.svg)
 */
const Ellipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M368 256a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm-128 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM96 272a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
    </Icon>
);

export default Ellipsis;