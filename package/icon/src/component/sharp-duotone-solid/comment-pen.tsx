
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-pen?s=sharp-duotone-solid comment-pen}
 * @preview ![comment-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-pen.svg)
 */
const CommentPen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm160 96.1l7.9-55.3 85.2-85.2L300.4 243l-85.2 85.2L160 336.1zM275.7 173.1L304.8 144l47.3 47.3L323 220.4l-47.3-47.3z" />
        <path d="M352.1 191.4L304.8 144l-29.1 29.1L323 220.4l29.1-29.1zM300.4 243l-47.3-47.3-85.2 85.2L160 336.1l55.3-7.9L300.4 243z" />
    </Icon>
);

export default CommentPen;