
import { Icon, generic } from "../../index";

/**
 * A component that renders the `page-caret-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page-caret-down?s=sharp-duotone-solid page-caret-down}
 * @preview ![page-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/page-caret-down.svg)
 */
const PageCaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l384 0 0-400L272 0 0 0zM96 224l192 0 0 32-96 96L96 256l0-32z" />
        <path d="M96 256V224H288v32l-96 96L96 256z" />
    </Icon>
);

export default PageCaretDown;