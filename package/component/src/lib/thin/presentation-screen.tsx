
import { Icon } from "../../index";

/**
 * A component that renders the `presentation-screen` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/presentation-screen?s=thin presentation-screen}
 * @preview ![presentation-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/presentation-screen.svg)
 */
const PresentationScreen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8l560 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 0zM32 48l0 240c0 35.3 28.7 64 64 64l184 0 0 52.7-93.7 93.7c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L288 419.3l90.3 90.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L296 404.7l0-52.7 184 0c35.3 0 64-28.7 64-64l0-240-16 0 0 240c0 26.5-21.5 48-48 48l-192 0L96 336c-26.5 0-48-21.5-48-48L48 48 32 48z" />
    </Icon>
);

export default PresentationScreen;