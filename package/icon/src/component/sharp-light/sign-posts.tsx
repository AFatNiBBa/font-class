
import { Icon } from "../../index";

/**
 * A component that renders the `sign-posts` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-posts?s=sharp-light sign-posts}
 * @preview ![sign-posts](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sign-posts.svg)
 */
const SignPosts: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 64l0 320 512 0 0-320-32 0-32 0L96 64 64 64 32 64zM512 32l32 0 32 0 0 32 0 320 0 32-32 0-32 0 0 96-32 0 0-96L96 416l0 96-32 0 0-96-32 0L0 416l0-32L0 64 0 32l32 0 32 0L64 0 96 0l0 32 384 0 0-32 32 0 0 32z" />
    </Icon>
);

export default SignPosts;