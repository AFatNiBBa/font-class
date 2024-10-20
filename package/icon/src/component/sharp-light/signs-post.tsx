
import { Icon } from "../../index";

/**
 * A component that renders the `signs-post` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signs-post?s=sharp-light signs-post}
 * @preview ![signs-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/signs-post.svg)
 */
const SignsPost: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 0l32 0 0 32 176 0 64 80-64 80-176 0 0 32 176 0 32 0 0 32 0 96 0 32-32 0-176 0 0 128-32 0 0-128L64 384 0 304l64-80 176 0 0-32L64 192l-32 0 0-32 0-96 0-32 32 0 176 0 0-32zM432.6 64L64 64l0 96 368.6 0L471 112 432.6 64zM79.4 256L41 304l38.4 48L448 352l0-96L79.4 256z" />
    </Icon>
);

export default SignsPost;