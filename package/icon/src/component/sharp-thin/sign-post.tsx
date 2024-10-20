
import { Icon } from "../../index";

/**
 * A component that renders the `sign-post` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-post?s=sharp-thin sign-post}
 * @preview ![sign-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sign-post.svg)
 */
const SignPost: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 0l16 0 0 64 168 0 80 96-80 96-168 0 0 256-16 0 0-256L48 256l-16 0 0-16L32 80l0-16 16 0 200 0 0-64zM491.2 160L424.5 80 48 80l0 160 376.5 0 66.7-80z" />
    </Icon>
);

export default SignPost;