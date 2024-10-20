
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signs-post` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signs-post?s=sharp-duotone-solid signs-post}
 * @preview ![signs-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/signs-post.svg)
 */
const SignsPost: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 0l64 0 0 64-64 0 0-64zm0 192l64 0 0 32-64 0 0-32zm0 160l64 0 0 160-64 0 0-160z" />
        <path d="M448 64L32 64l0 128 416 0 64-64L448 64zM64 224L0 288l64 64 416 0 0-128L64 224z" />
    </Icon>
);

export default SignsPost;