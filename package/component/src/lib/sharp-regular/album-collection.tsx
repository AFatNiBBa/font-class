
import { Icon } from "../../index";

/**
 * A component that renders the `album-collection` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-collection?s=sharp-regular album-collection}
 * @preview ![album-collection](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/album-collection.svg)
 */
const AlbumCollection: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0L56 0 456 0l24 0 0 48-24 0L56 48 32 48 32 0zM400 336c0 57.4-64.5 104-144 104s-144-46.6-144-104s64.5-104 144-104s144 46.6 144 104zM40 80l432 0 24 0 0 48-24 0L40 128l-24 0 0-48 24 0zM82.9 464l346.3 0 29.1-256L53.8 208 82.9 464zM472 512L40 512 5.5 208 0 160l48.3 0 415.4 0 48.3 0-5.5 48L472 512zM256 368c17.7 0 32-10.7 32-24s-14.3-24-32-24s-32 10.7-32 24s14.3 24 32 24z" />
    </Icon>
);

export default AlbumCollection;