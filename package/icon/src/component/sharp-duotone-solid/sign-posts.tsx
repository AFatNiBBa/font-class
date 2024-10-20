
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sign-posts` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-posts?s=sharp-duotone-solid sign-posts}
 * @preview ![sign-posts](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sign-posts.svg)
 */
const SignPosts: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 0l64 0 0 32L64 32 64 0zm0 416l64 0 0 96-64 0 0-96zM448 0l64 0 0 32c-21.3 0-42.7 0-64 0l0-32zm0 416c21.3 0 42.7 0 64 0l0 96-64 0 0-96z" />
        <path d="M0 32H576V416H0V32z" />
    </Icon>
);

export default SignPosts;