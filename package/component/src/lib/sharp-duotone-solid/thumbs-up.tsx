
import { Icon, generic } from "../../index";

/**
 * A component that renders the `thumbs-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbs-up?s=sharp-duotone-solid thumbs-up}
 * @preview ![thumbs-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/thumbs-up.svg)
 */
const ThumbsUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 200.9l0 23.1 0 96 0 64 0 25.7 21.4 14.2 72 48 12.1 8.1 14.5 0 120 0 48 0 0-56 24 0 0-72 24 0 0-80 16 0 0-96-48 0-153.8 0C327 142.8 336 105.8 336 67.7L336 32l-96 0 0 35.7c0 43.7-19.9 85.1-54 112.4l-7.9 6.4-18 14.4z" />
        <path d="M0 192H128V480H0V192z" />
    </Icon>
);

export default ThumbsUp;