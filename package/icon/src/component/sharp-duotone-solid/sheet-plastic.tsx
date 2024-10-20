
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sheet-plastic` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sheet-plastic?s=sharp-duotone-solid sheet-plastic}
 * @preview ![sheet-plastic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sheet-plastic.svg)
 */
const SheetPlastic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l224 0 0-160 160 0L384 0 0 0zM41.4 160l11.3-11.3 96-96L160 41.4 182.6 64 171.3 75.3l-96 96L64 182.6 41.4 160zm32 96l11.3-11.3 160-160L256 73.4 278.6 96l-11.3 11.3-160 160L96 278.6 73.4 256z" />
        <path d="M224 512L384 352H224V512z" />
    </Icon>
);

export default SheetPlastic;