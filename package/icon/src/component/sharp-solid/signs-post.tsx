
import { Icon } from "../../index";

/**
 * A component that renders the `signs-post` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signs-post?s=sharp-solid signs-post}
 * @preview ![signs-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/signs-post.svg)
 */
const SignsPost: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 0l64 0 0 32 160 0 64 64-64 64L32 160 32 32l192 0 0-32zm0 224l0-32 64 0 0 32 192 0 0 128L64 352 0 288l64-64 160 0zm64 160l0 128-64 0 0-128 64 0z" />
    </Icon>
);

export default SignsPost;