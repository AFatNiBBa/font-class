
import { Icon } from "../../index";

/**
 * A component that renders the `sign-post` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-post?s=thin sign-post}
 * @preview ![sign-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/sign-post.svg)
 */
const SignPost: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 8c0-4.4 3.6-8 8-8s8 3.6 8 8l0 56 153 0c9.5 0 18.5 4.2 24.6 11.5l61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5l-153 0 0 248c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-248L64 256c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l184 0 0-56zM429.3 85.8c-3-3.6-7.5-5.8-12.3-5.8L64 80c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16l353 0c4.7 0 9.3-2.1 12.3-5.8L491.2 160 429.3 85.8z" />
    </Icon>
);

export default SignPost;