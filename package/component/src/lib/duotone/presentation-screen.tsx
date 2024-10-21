
import { Icon, generic } from "../../index";

/**
 * A component that renders the `presentation-screen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/presentation-screen?s=duotone presentation-screen}
 * @preview ![presentation-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/presentation-screen.svg)
 */
const PresentationScreen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 64l0 224c0 35.3 28.7 64 64 64l160 0 64 0 160 0c35.3 0 64-28.7 64-64l0-224-64 0 0 224L96 288 96 64 32 64z" />
        <path d="M0 32C0 14.3 14.3 0 32 0L544 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 64C14.3 64 0 49.7 0 32zM256 386.7l0-34.7 64 0 0 34.7 70.6 70.6c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 445.3l-57.4 57.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L256 386.7z" />
    </Icon>
);

export default PresentationScreen;