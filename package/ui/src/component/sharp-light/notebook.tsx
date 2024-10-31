
import { Icon } from "../../index";

/**
 * A component that renders the `notebook` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notebook?s=sharp-light notebook}
 * @preview ![notebook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/notebook.svg)
 */
const Notebook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 480l224 0 0-448L224 32l0 448zm-32 0l0-448L96 32l0 80 32 0 16 0 0 32-16 0-32 0 0 96 32 0 16 0 0 32-16 0-32 0 0 96 32 0 16 0 0 32-16 0-32 0 0 80 96 0zm0 32l-96 0-32 0 0-32 0-80-48 0L0 400l0-32 16 0 48 0 0-96-48 0L0 272l0-32 16 0 48 0 0-96-48 0L0 144l0-32 16 0 48 0 0-80L64 0 96 0l96 0 32 0L448 0l32 0 0 32 0 448 0 32-32 0-224 0-32 0z" />
    </Icon>
);

export default Notebook;