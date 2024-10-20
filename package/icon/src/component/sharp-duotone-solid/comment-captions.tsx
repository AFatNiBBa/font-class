
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-captions` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-captions?s=sharp-duotone-solid comment-captions}
 * @preview ![comment-captions](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-captions.svg)
 */
const CommentCaptions: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm96-32l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48zm0 80l24 0 48 0 24 0 0 48-24 0-48 0-24 0 0-48zm128 0l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48zm96-80l24 0 48 0 24 0 0 48-24 0-48 0-24 0 0-48z" />
        <path d="M96 208l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48zm224 0l24 0 48 0 24 0 0 48-24 0-48 0-24 0 0-48zM96 288l24 0 48 0 24 0 0 48-24 0-48 0-24 0 0-48zm128 0l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48z" />
    </Icon>
);

export default CommentCaptions;