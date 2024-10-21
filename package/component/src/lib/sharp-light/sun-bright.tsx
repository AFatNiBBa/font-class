
import { Icon } from "../../index";

/**
 * A component that renders the `sun-bright` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun-bright?s=sharp-light sun-bright}
 * @preview ![sun-bright](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sun-bright.svg)
 */
const SunBright: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 0l0 16 0 80 0 16-32 0 0-16 0-80 0-16 32 0zM0 240l16 0 80 0 16 0 0 32-16 0-80 0L0 272l0-32zm400 0l16 0 80 0 16 0 0 32-16 0-80 0-16 0 0-32zM272 400l0 16 0 80 0 16-32 0 0-16 0-80 0-16 32 0zM86.3 63.7L97.6 75l56.6 56.6 11.3 11.3-22.6 22.6-11.3-11.3L75 97.6 63.7 86.3 86.3 63.7zm-22.6 362L75 414.4l56.6-56.6 11.3-11.3 22.6 22.6-11.3 11.3L97.6 437 86.3 448.3 63.7 425.7zM346.5 142.9l11.3-11.3L414.4 75l11.3-11.3 22.6 22.6L437 97.6l-56.6 56.6-11.3 11.3-22.6-22.6zm22.6 203.6l11.3 11.3L437 414.4l11.3 11.3-22.6 22.6L414.4 437l-56.6-56.6-11.3-11.3 22.6-22.6zM336 256a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-192 0a112 112 0 1 1 224 0 112 112 0 1 1 -224 0z" />
    </Icon>
);

export default SunBright;