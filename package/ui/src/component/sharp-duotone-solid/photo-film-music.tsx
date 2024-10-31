
import { Icon, generic } from "../../index";

/**
 * A component that renders the `photo-film-music` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/photo-film-music?s=sharp-duotone-solid photo-film-music}
 * @preview ![photo-film-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/photo-film-music.svg)
 */
const PhotoFilmMusic: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 448l289.9 0c4.4-18.3 15.9-33.2 29.7-43.5c6.7-5 14.2-9.2 22.3-12.5L160 392l0-296L0 96zm56 56l48 0 0 48-48 0 0-48zm0 96l48 0 0 48-48 0 0-48zm0 96l48 0 0 48-48 0 0-48zM288 224l0 32 64 0 16 0 0-48.4L499 164c-17-22.7-34-45.3-51-68l-60 80-28-32-72 80zm32 241.3c0 26.5 28.7 48 64 48s64-21.5 64-48l0-150.7 144-48 0 88.2c-5.1-1-10.5-1.5-16-1.5c-35.3 0-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48c0-1.5-.1-3-.3-4.4c.2-1.2 .3-2.4 .3-3.6l0-160 0-48 0-33.3-31.6 10.5-192 64L400 232l0 17.3 0 48 0 121.5c-5.1-1-10.5-1.5-16-1.5c-35.3 0-64 21.5-64 48z" />
        <path d="M640 0L192 0l0 320 176 0 0-64-16 0-64 0 0-32 72-80 28 32 60-80 51 68 141-47L640 0zM288 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default PhotoFilmMusic;