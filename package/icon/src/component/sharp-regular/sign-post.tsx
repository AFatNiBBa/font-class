
import { Icon } from "../../index";

/**
 * A component that renders the `sign-post` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-post?s=sharp-regular sign-post}
 * @preview ![sign-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sign-post.svg)
 */
const SignPost: typeof Icon = x => (
    <Icon {...x}>
        <path d="M232 0l48 0 0 64 152 0 80 96-80 96-152 0 0 256-48 0 0-256L80 256l-48 0 0-48 0-96 0-48 48 0 152 0 0-64zM449.5 160l-40-48L80 112l0 96 329.5 0 40-48z" />
    </Icon>
);

export default SignPost;