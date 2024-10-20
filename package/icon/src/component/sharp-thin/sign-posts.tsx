
import { Icon } from "../../index";

/**
 * A component that renders the `sign-posts` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-posts?s=sharp-thin sign-posts}
 * @preview ![sign-posts](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sign-posts.svg)
 */
const SignPosts: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 32L80 0 96 0l0 32 384 0 0-32 16 0 0 32 64 0 16 0 0 16 0 352 0 16-16 0-64 0 0 96-16 0 0-96L96 416l0 96-16 0 0-96-64 0L0 416l0-16L0 48 0 32l16 0 64 0zM560 48L16 48l0 352 544 0 0-352z" />
    </Icon>
);

export default SignPosts;