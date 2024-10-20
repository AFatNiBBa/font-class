
import { Icon, generic } from "../../index";

/**
 * A component that renders the `album-collection` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-collection?s=sharp-duotone-solid album-collection}
 * @preview ![album-collection](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/album-collection.svg)
 */
const AlbumCollection: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160L40 512l432 0 40-352L0 160zM72 344c0-75.1 82.4-136 184-136s184 60.9 184 136s-82.4 136-184 136S72 419.1 72 344z" />
        <path d="M32 0L56 0 456 0l24 0 0 48-24 0L56 48 32 48 32 0zM16 80l24 0 432 0 24 0 0 48-24 0L40 128l-24 0 0-48zM440 344c0 75.1-82.4 136-184 136S72 419.1 72 344s82.4-136 184-136s184 60.9 184 136zm-152 8c0-13.3-14.3-24-32-24s-32 10.7-32 24s14.3 24 32 24s32-10.7 32-24z" />
    </Icon>
);

export default AlbumCollection;