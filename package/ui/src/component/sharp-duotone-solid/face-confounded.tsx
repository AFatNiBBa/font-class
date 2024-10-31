
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-confounded` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-confounded?s=sharp-duotone-solid face-confounded}
 * @preview ![face-confounded](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-confounded.svg)
 */
const FaceConfounded: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM106.5 391.2l14.3-28.6 14.3 7.2 23.7 11.8 40.3-26.8 8.9-5.9 8.9 5.9L256 380.8l39.1-26.1 8.9-5.9 8.9 5.9 40.3 26.8 23.7-11.8 14.3-7.2 14.3 28.6-14.3 7.2-32 16-8.3 4.2-7.7-5.2L304 387.2l-39.1 26.1-8.9 5.9-8.9-5.9L208 387.2l-39.1 26.1-7.7 5.2-8.3-4.2-32-16-14.3-7.2zM112 192l118.9 64L112 320l45.7-64L112 192zm169.1 64L400 192l-45.7 64L400 320 281.1 256z" />
        <path d="M230.9 256L112 192l45.7 64L112 320l118.9-64zm50.3 0L400 320l-45.7-64L400 192 281.1 256z" />
    </Icon>
);

export default FaceConfounded;