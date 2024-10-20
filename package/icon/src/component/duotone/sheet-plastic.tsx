
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sheet-plastic` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sheet-plastic?s=duotone sheet-plastic}
 * @preview ![sheet-plastic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sheet-plastic.svg)
 */
const SheetPlastic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448c0 35.3 28.7 64 64 64l160 0 0-128c0-17.7 14.3-32 32-32l128 0 0-288c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64zm52.7 84.7l96-96c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-96 96c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6zm32 96l160-160c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6z" />
        <path d="M224 512L384 352H256c-17.7 0-32 14.3-32 32V512z" />
    </Icon>
);

export default SheetPlastic;