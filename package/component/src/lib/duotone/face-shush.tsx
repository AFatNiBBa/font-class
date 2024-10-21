
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-shush` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-shush?s=duotone face-shush}
 * @preview ![face-shush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-shush.svg)
 */
const FaceShush: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 114.6 114.6 0 256 0S512 114.6 512 256c0 82.2-38.8 155.4-99 202.3c7.4-21.4 1.3-46-17.1-61.3c-13.5-11.3-30.8-15.1-46.9-11.9c-5.7-21.2-19.1-39.2-37-50.9l0-58.3c14.8-6.9 26.6-15.9 35.3-24.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0c-3.7 3.7-8.1 7.4-13.3 10.9c-4-27-27.3-47.6-55.4-47.6s-51.3 20.7-55.4 47.6c-5.2-3.5-9.6-7.3-13.3-10.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6c8.7 8.7 20.5 17.7 35.3 24.6l0 50.1c-32.8 12.8-56 44.7-56 82l0 24 0 24c0 11.8 2.3 23.1 6.5 33.3C61.8 449.1 0 359.8 0 256zM144.4 128a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm160 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M256 224c13.3 0 24 10.7 24 24l0 72-48 0 0-72c0-13.3 10.7-24 24-24zM232 400c-4.4 0-8 3.6-8 8l0 11.5L287.6 464l10 0c7.1 0 13.9-3.2 18.4-8.6l25.6-30.7c8.5-10.2 23.6-11.6 33.8-3.1s11.6 23.6 3.1 33.8l-25.6 30.7c-13.7 16.4-33.9 25.9-55.3 25.9L280 512l-48 0c-30.9 0-56-25.1-56-56l0-24 0-24c0-30.9 25.1-56 56-56l32 0c30.9 0 56 25.1 56 56l0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8c0-4.4-3.6-8-8-8l-32 0z" />
    </Icon>
);

export default FaceShush;