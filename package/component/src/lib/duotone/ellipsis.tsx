
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ellipsis` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis?s=duotone ellipsis}
 * @preview ![ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ellipsis.svg)
 */
const Ellipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M168 256a56 56 0 1 0 112 0 56 56 0 1 0 -112 0z" />
        <path d="M64 312a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm320 0a56 56 0 1 0 0-112 56 56 0 1 0 0 112z" />
    </Icon>
);

export default Ellipsis;