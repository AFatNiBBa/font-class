
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sign-posts-wrench` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-posts-wrench?s=sharp-duotone-solid sign-posts-wrench}
 * @preview ![sign-posts-wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sign-posts-wrench.svg)
 */
const SignPostsWrench: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 416l384 0c-20.1-26.7-32-60-32-96c0-47.8 21-90.7 54.2-120l9.1-8 12.1 0 20.7 0 32 0 0 32 0 64 32 24 32-24 0-64 0-32 32 0 0-160-64 0 0-32L448 0l0 32L128 32l0-32L64 0l0 32L0 32zM64 448l0 64 64 0 0-64-64 0z" />
        <path d="M448 224l-20.7 0c-26.6 23.5-43.3 57.8-43.3 96c0 40.4 18.7 76.5 48 99.9l0 92.1 160 0 0-92.1c29.3-23.5 48-59.5 48-99.9c0-38.2-16.8-72.5-43.3-96L576 224l0 80-64 48-64-48 0-80z" />
    </Icon>
);

export default SignPostsWrench;