
import { Icon } from "../../index";

/**
 * A component that renders the `notebook` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notebook?s=sharp-solid notebook}
 * @preview ![notebook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/notebook.svg)
 */
const Notebook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 0l0 104-8 0-32 0L0 104l0 48 24 0 32 0 8 0 0 80-8 0-32 0L0 232l0 48 24 0 32 0 8 0 0 80-8 0-32 0L0 360l0 48 24 0 32 0 8 0 0 104 128 0L192 0 64 0zM480 0L224 0l0 512 256 0L480 0z" />
    </Icon>
);

export default Notebook;