
import { Icon } from "../../index";

/**
 * A component that renders the `album-circle-plus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-circle-plus?s=sharp-light album-circle-plus}
 * @preview ![album-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/album-circle-plus.svg)
 */
const AlbumCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M416 64L32 64l0 384 243.2 0c5.9 11.4 12.9 22.2 21 32L32 480 0 480l0-32L0 64 0 32l32 0 384 0 32 0 0 32 0 128.7c-5.3-.5-10.6-.7-16-.7s-10.7 .2-16 .7L416 64zM224 96c69.3 0 128.3 44 150.5 105.6c-10.2 3.5-20 8-29.3 13.2C328.1 164.3 280.3 128 224 128c-70.7 0-128 57.3-128 128s57.3 128 128 128c11.2 0 22-1.4 32.4-4.1c.7 10.9 2.4 21.5 5 31.7c-12 2.9-24.5 4.4-37.4 4.4c-88.4 0-160-71.6-160-160s71.6-160 160-160zm0 136a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM544 368a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-64l0 48 48 0 16 0 0 32-16 0-48 0 0 48 0 16-32 0 0-16 0-48-48 0-16 0 0-32 16 0 48 0 0-48 0-16 32 0 0 16z" />
    </Icon>
);

export default AlbumCirclePlus;