
import { Icon } from "../../index";

/**
 * A component that renders the `sign-post` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-post?s=light sign-post}
 * @preview ![sign-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sign-post.svg)
 */
const SignPost: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 145 0c9.5 0 18.5 4.2 24.6 11.5l61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5l-145 0 0 240c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-240L64 256c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l176 0 0-48zM470.3 160L417 96 64 96l0 128 353 0 53.3-64z" />
    </Icon>
);

export default SignPost;