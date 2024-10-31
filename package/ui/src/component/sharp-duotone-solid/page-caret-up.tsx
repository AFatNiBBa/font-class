
import { Icon, generic } from "../../index";

/**
 * A component that renders the `page-caret-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page-caret-up?s=sharp-duotone-solid page-caret-up}
 * @preview ![page-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/page-caret-up.svg)
 */
const PageCaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l384 0 0-400L272 0 0 0zM96 288l96-96 96 96 0 32L96 320l0-32z" />
        <path d="M96 288v32H288V288l-96-96L96 288z" />
    </Icon>
);

export default PageCaretUp;