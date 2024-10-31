
import { Icon } from "../../index";

/**
 * A component that renders the `album-circle-plus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-circle-plus?s=regular album-circle-plus}
 * @preview ![album-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/album-circle-plus.svg)
 */
const AlbumCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 80l320 0c8.8 0 16 7.2 16 16l0 98.9c10.4-1.9 21.1-2.9 32-2.9c5.4 0 10.7 .2 16 .7L448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l232.2 0c-11.8-14.3-21.4-30.5-28.2-48L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16zm160 32c-79.5 0-144 64.5-144 144s64.5 144 144 144c11.8 0 23.2-1.4 34.2-4.1c-1.4-9.1-2.2-18.4-2.2-27.9c0-71.4 42.5-132.9 103.6-160.5C339.7 151.8 286.5 112 224 112zM192 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208l0 48 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default AlbumCirclePlus;