
import { Icon, generic } from "../../index";

/**
 * A component that renders the `images-user` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/images-user?s=duotone images-user}
 * @preview ![images-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/images-user.svg)
 */
const ImagesUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 96l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zM224 301.7c0-25.2 20.5-45.7 45.7-45.7l132.6 0c25.2 0 45.7 20.5 45.7 45.7c0 10.1-8.2 18.3-18.3 18.3l-187.4 0c-10.1 0-18.3-8.2-18.3-18.3zM400 160a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224zm352 40a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM224 301.7c0 10.1 8.2 18.3 18.3 18.3l187.4 0c10.1 0 18.3-8.2 18.3-18.3c0-25.2-20.5-45.7-45.7-45.7l-132.6 0c-25.2 0-45.7 20.5-45.7 45.7z" />
    </Icon>
);

export default ImagesUser;