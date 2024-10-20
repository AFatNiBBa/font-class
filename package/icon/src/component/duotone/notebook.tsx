
import { Icon, generic } from "../../index";

/**
 * A component that renders the `notebook` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notebook?s=duotone notebook}
 * @preview ![notebook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/notebook.svg)
 */
const Notebook: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 0L432 0c26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48l-240 0L192 0z" />
        <path d="M112 0C85.5 0 64 21.5 64 48l0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 80-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 80-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56c0 26.5 21.5 48 48 48l80 0L192 0 112 0z" />
    </Icon>
);

export default Notebook;