
import { Icon } from "../../index";

/**
 * A component that renders the `download` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/download?s=thin download}
 * @preview ![download](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/download.svg)
 */
const Download: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 348.7L133.7 242.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l128 128c3.1 3.1 8.2 3.1 11.3 0l128-128c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L264 356.7 264 8zM143.4 320L64 320c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64l-79.4 0-16 16 95.4 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l95.4 0-16-16zM432 432a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm-32-16a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
    </Icon>
);

export default Download;