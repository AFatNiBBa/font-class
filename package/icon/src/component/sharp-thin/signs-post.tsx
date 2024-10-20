
import { Icon } from "../../index";

/**
 * A component that renders the `signs-post` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signs-post?s=sharp-thin signs-post}
 * @preview ![signs-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/signs-post.svg)
 */
const SignsPost: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 0l16 0 0 48 184 0 64 72-64 72-184 0 0 48 200 0 16 0 0 16 0 112 0 16-16 0-200 0 0 128-16 0 0-128L64 384 0 312l64-72 184 0 0-48L48 192l-16 0 0-16L32 64l0-16 16 0 200 0 0-48zM440.8 64L48 64l0 112 392.8 0 49.8-56L440.8 64zM71.2 256L21.4 312l49.8 56L464 368l0-112L71.2 256z" />
    </Icon>
);

export default SignsPost;