
import { Icon } from "../../index";

/**
 * A component that renders the `album-collection` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-collection?s=sharp-light album-collection}
 * @preview ![album-collection](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/album-collection.svg)
 */
const AlbumCollection: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0l0 32 16 0 416 0 16 0 0-32L464 0 48 0 32 0zM16 64l0 32 16 0 448 0 16 0 0-32-16 0L32 64 16 64zm19.5 96l441 0L443.2 480 68.8 480 35.5 160zM40 512l432 0 36.7-352 3.3-32-32.2 0L32.2 128 0 128l3.3 32L40 512zm216-96c-77.7 0-128-49.3-128-96s50.3-96 128-96s128 49.3 128 96s-50.3 96-128 96zm0 32c88.4 0 160-57.3 160-128s-71.6-128-160-128s-160 57.3-160 128s71.6 128 160 128zm0-104c13.3 0 24-9 24-20s-10.7-20-24-20s-24 9-24 20s10.7 20 24 20z" />
    </Icon>
);

export default AlbumCollection;