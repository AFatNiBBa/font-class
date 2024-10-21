
import { Icon, generic } from "../../index";

/**
 * A component that renders the `album-collection-circle-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-collection-circle-plus?s=sharp-duotone-solid album-collection-circle-plus}
 * @preview ![album-collection-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/album-collection-circle-plus.svg)
 */
const AlbumCollectionCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160L40 512l354.8 0c-18.9-13.3-35.1-30.3-47.5-49.9c-26.9 11.4-58 17.9-91.3 17.9C154.4 480 72 419.1 72 344s82.4-136 184-136c45.4 0 86.9 12.1 119 32.2c31.5-29.9 74.2-48.2 121-48.2c4.1 0 8.2 .1 12.3 .4L512 160 0 160zM16 80l0 48 24 0 432 0 24 0 0-48-24 0L40 80 16 80zM32 0l0 48 24 0 400 0 24 0 0-48L456 0 56 0 32 0zM224 352c0 13.3 14.3 24 32 24s32-10.7 32-24s-14.3-24-32-24s-32 10.7-32 24z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-80l-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48 0-16z" />
    </Icon>
);

export default AlbumCollectionCirclePlus;