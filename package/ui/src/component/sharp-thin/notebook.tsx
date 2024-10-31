
import { Icon } from "../../index";

/**
 * A component that renders the `notebook` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notebook?s=sharp-thin notebook}
 * @preview ![notebook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/notebook.svg)
 */
const Notebook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 16l256 0 0 480-256 0 0-480zm-16 0l0 480L80 496l0-104 40 0 8 0 0-16-8 0-40 0 0-112 40 0 8 0 0-16-8 0-40 0 0-112 40 0 8 0 0-16-8 0-40 0L80 16l112 0zM64 392l0 104 0 16 16 0 384 0 16 0 0-16 0-480 0-16L464 0 80 0 64 0l0 16 0 104L8 120l-8 0 0 16 8 0 56 0 0 112L8 248l-8 0 0 16 8 0 56 0 0 112L8 376l-8 0 0 16 8 0 56 0z" />
    </Icon>
);

export default Notebook;