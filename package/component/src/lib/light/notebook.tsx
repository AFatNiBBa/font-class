
import { Icon } from "../../index";

/**
 * A component that renders the `notebook` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notebook?s=light notebook}
 * @preview ![notebook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/notebook.svg)
 */
const Notebook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 32l-64 0c-17.7 0-32 14.3-32 32l0 48 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 96 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 96 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 17.7 14.3 32 32 32l64 0 0-448zm32 448l192 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L224 32l0 448zm-16 32l-80 0c-35.3 0-64-28.7-64-64l0-48-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-96-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-96-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-48C64 28.7 92.7 0 128 0l80 0L416 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64l-208 0z" />
    </Icon>
);

export default Notebook;