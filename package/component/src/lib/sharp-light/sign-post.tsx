
import { Icon } from "../../index";

/**
 * A component that renders the `sign-post` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-post?s=sharp-light sign-post}
 * @preview ![sign-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sign-post.svg)
 */
const SignPost: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 0l32 0 0 64 160 0 80 96-80 96-160 0 0 256-32 0 0-256L64 256l-32 0 0-32L32 96l0-32 32 0 176 0 0-64zM470.3 160L417 96 64 96l0 128 353 0 53.3-64z" />
    </Icon>
);

export default SignPost;