
import { Icon } from "../../index";

/**
 * A component that renders the `sign-posts` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-posts?s=sharp-solid sign-posts}
 * @preview ![sign-posts](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sign-posts.svg)
 */
const SignPosts: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 0l0 32L0 32 0 416l576 0 0-384-64 0 0-32L448 0l0 32L128 32l0-32L64 0zm64 448l-64 0 0 64 64 0 0-64zm320 0l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default SignPosts;