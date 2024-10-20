
import { Icon, generic } from "../../index";

/**
 * A component that renders the `presentation-screen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/presentation-screen?s=sharp-duotone-solid presentation-screen}
 * @preview ![presentation-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/presentation-screen.svg)
 */
const PresentationScreen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 64l0 256 0 32 32 0 192 0 64 0 192 0 32 0 0-32 0-256-64 0 0 224L96 288 96 64 32 64z" />
        <path d="M0 0L32 0 544 0l32 0 0 64-32 0L32 64 0 64 0 0zM256 386.7l0-34.7 64 0 0 34.7 54.6 54.6L397.3 464 352 509.3l-22.6-22.6L288 445.3l-41.4 41.4L224 509.3 178.7 464l22.6-22.6L256 386.7z" />
    </Icon>
);

export default PresentationScreen;