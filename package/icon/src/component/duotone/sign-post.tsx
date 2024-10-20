
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sign-post` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-post?s=duotone sign-post}
 * @preview ![sign-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sign-post.svg)
 */
const SignPost: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32-64 0 0-32zm0 224l64 0 0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224z" />
        <path d="M441.6 75.5l61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32H417c9.5 0 18.5 4.2 24.6 11.5z" />
    </Icon>
);

export default SignPost;