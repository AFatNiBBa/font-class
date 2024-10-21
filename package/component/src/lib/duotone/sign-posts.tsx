
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sign-posts` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-posts?s=duotone sign-posts}
 * @preview ![sign-posts](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sign-posts.svg)
 */
const SignPosts: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 32C64 14.3 78.3 0 96 0s32 14.3 32 32L64 32zm0 384l64 0 0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zM448 32c26.7 0 53.3 0 80 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-16 0 0-384c0-17.7-14.3-32-32-32s-32 14.3-32 32zm0 384l64 0 0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64z" />
        <path d="M0 80C0 53.5 21.5 32 48 32H528c26.5 0 48 21.5 48 48V368c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80z" />
    </Icon>
);

export default SignPosts;