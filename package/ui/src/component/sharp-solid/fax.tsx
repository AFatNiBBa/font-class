
import { Icon } from "../../index";

/**
 * A component that renders the `fax` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fax?s=sharp-solid fax}
 * @preview ![fax](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/fax.svg)
 */
const Fax: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l0 32 0 128 64 0 0-96 194.7 0L416 93.3l0 66.7 64 0 0-80 0-13.3-9.4-9.4-48-48L413.3 0 400 0 160 0 128 0zM0 128L0 512l96 0 0-384L0 128zm512 64l-384 0 0 320 384 0 0-320zM288 256l0 64-64 0 0-64 64 0zM224 384l64 0 0 64-64 0 0-64zM416 256l0 64-64 0 0-64 64 0zM352 384l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default Fax;