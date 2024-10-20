
import { Icon } from "../../index";

/**
 * A component that renders the `sign-posts` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-posts?s=sharp-regular sign-posts}
 * @preview ![sign-posts](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sign-posts.svg)
 */
const SignPosts: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 0l0 32L48 32 0 32 0 80 0 368l0 48 48 0 16 0 0 96 48 0 0-96 352 0 0 96 48 0 0-96 16 0 48 0 0-48 0-288 0-48-48 0-16 0 0-32L464 0l0 32L112 32l0-32L64 0zM528 80l0 288L48 368 48 80l480 0z" />
    </Icon>
);

export default SignPosts;