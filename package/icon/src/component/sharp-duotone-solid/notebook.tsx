
import { Icon, generic } from "../../index";

/**
 * A component that renders the `notebook` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notebook?s=sharp-duotone-solid notebook}
 * @preview ![notebook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/notebook.svg)
 */
const Notebook: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 0L480 0l0 512-288 0L192 0z" />
        <path d="M192 0L64 0l0 104-40 0L0 104l0 48 24 0 40 0 0 80-40 0L0 232l0 48 24 0 40 0 0 80-40 0L0 360l0 48 24 0 40 0 0 104 128 0L192 0z" />
    </Icon>
);

export default Notebook;