
import { Icon } from "../../index";

/**
 * A component that renders the `signs-post` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signs-post?s=thin signs-post}
 * @preview ![signs-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/signs-post.svg)
 */
const SignsPost: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 8c0-4.4 3.6-8 8-8s8 3.6 8 8l0 40 176.8 0c4.6 0 8.9 2 12 5.4l49.8 56c5.4 6.1 5.4 15.2 0 21.3l-49.8 56c-3 3.4-7.4 5.4-12 5.4L264 192l0 48 184 0c17.7 0 32 14.3 32 32l0 80c0 17.7-14.3 32-32 32l-184 0 0 120c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-120L71.2 384c-4.6 0-8.9-2-12-5.4l-49.8-56c-5.4-6.1-5.4-15.2 0-21.3l49.8-56c3-3.4 7.4-5.4 12-5.4L248 240l0-48L64 192c-17.7 0-32-14.3-32-32l0-80c0-17.7 14.3-32 32-32l184 0 0-40zM440.8 64L64 64c-8.8 0-16 7.2-16 16l0 80c0 8.8 7.2 16 16 16l376.8 0 49.8-56L440.8 64zM71.2 256L21.4 312l49.8 56L448 368c8.8 0 16-7.2 16-16l0-80c0-8.8-7.2-16-16-16L71.2 256z" />
    </Icon>
);

export default SignsPost;