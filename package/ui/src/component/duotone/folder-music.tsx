
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-music` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-music?s=duotone folder-music}
 * @preview ![folder-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/folder-music.svg)
 */
const FolderMusic: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L288 96c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32L64 32C28.7 32 0 60.7 0 96zM128 384c0-17.7 21.5-32 48-32c5.6 0 11 .6 16 1.8l0-81.8 0-32c0-6.7 4.1-12.6 10.4-15l128-48c4.9-1.8 10.4-1.2 14.7 1.8s6.9 7.9 6.9 13.2l0 32 0 128c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-74.7-96 36L224 384c0 17.7-21.5 32-48 32s-48-14.3-48-32z" />
        <path d="M345.1 178.8c4.3 3 6.9 7.9 6.9 13.2l0 32 0 128c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-74.7-96 36L224 384c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-81.8 0-32c0-6.7 4.1-12.6 10.4-15l128-48c4.9-1.8 10.4-1.2 14.7 1.8z" />
    </Icon>
);

export default FolderMusic;