
import { Icon } from "../../index";

/**
 * A component that renders the `sign-posts` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-posts?s=regular sign-posts}
 * @preview ![sign-posts](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sign-posts.svg)
 */
const SignPosts: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 24l0 8L48 32C21.5 32 0 53.5 0 80L0 368c0 26.5 21.5 48 48 48l16 0 0 72c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72 352 0 0 72c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72 16 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-16 0 0-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8L112 32l0-8c0-13.3-10.7-24-24-24S64 10.7 64 24zM528 80l0 288L48 368 48 80l480 0z" />
    </Icon>
);

export default SignPosts;