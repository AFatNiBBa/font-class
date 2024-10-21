
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-music` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-music?s=sharp-duotone-solid comment-music}
 * @preview ![comment-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-music.svg)
 */
const CommentMusic: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm128 80c0-17.7 21.5-32 48-32c5.6 0 11 .6 16 1.8l0-81.8 0-32 0-11.1 10.4-3.9 128-48 21.6-8.1 0 23.1 0 32 0 128c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-74.7-96 36L224 320c0 17.7-21.5 32-48 32s-48-14.3-48-32z" />
        <path d="M352 104.9l0 23.1 0 32 0 128c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-74.7-96 36L224 320c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-81.8 0-32 0-11.1 10.4-3.9 128-48 21.6-8.1z" />
    </Icon>
);

export default CommentMusic;