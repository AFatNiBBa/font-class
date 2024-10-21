
import { Icon } from "../../index";

/**
 * A component that renders the `notebook` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notebook?s=sharp-regular notebook}
 * @preview ![notebook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/notebook.svg)
 */
const Notebook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 48l192 0 0 416-192 0 0-416zm-48 0l0 416-80 0 0-48 24 0 24 0 0-48-24 0-24 0 0-88 24 0 24 0 0-48-24 0-24 0 0-88 24 0 24 0 0-48-24 0-24 0 0-48 80 0zM64 416l0 48 0 48 48 0 320 0 48 0 0-48 0-416 0-48L432 0 112 0 64 0l0 48 0 48L24 96 0 96l0 48 24 0 40 0 0 88-40 0L0 232l0 48 24 0 40 0 0 88-40 0L0 368l0 48 24 0 40 0z" />
    </Icon>
);

export default Notebook;