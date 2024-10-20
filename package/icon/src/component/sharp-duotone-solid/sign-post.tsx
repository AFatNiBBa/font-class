
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sign-post` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-post?s=sharp-duotone-solid sign-post}
 * @preview ![sign-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sign-post.svg)
 */
const SignPost: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 0l0 64 64 0 0-64L224 0zm0 256l0 256 64 0 0-256-64 0z" />
        <path d="M432 64l80 96-80 96H32V64H432z" />
    </Icon>
);

export default SignPost;