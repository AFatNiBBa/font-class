
import { Icon } from "../../index";

/**
 * A component that renders the `presentation-screen` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/presentation-screen?s=sharp-thin presentation-screen}
 * @preview ![presentation-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/presentation-screen.svg)
 */
const PresentationScreen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M8 0L0 0 0 16l8 0 560 0 8 0 0-16-8 0L8 0zM48 56l0-8L32 48l0 8 0 288c0 4.4 3.6 8 8 8l240 0 0 52.7-85.7 85.7-5.7 5.7L200 507.3l5.7-5.7L288 419.3l82.3 82.3 5.7 5.7L387.3 496l-5.7-5.7L296 404.7l0-52.7 240 0c4.4 0 8-3.6 8-8l0-288 0-8-16 0 0 8 0 280-240 0L48 336 48 56z" />
    </Icon>
);

export default PresentationScreen;