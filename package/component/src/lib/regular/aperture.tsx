
import { Icon } from "../../index";

/**
 * A component that renders the `aperture` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/aperture?s=regular aperture}
 * @preview ![aperture](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/aperture.svg)
 */
const Aperture: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464l67-116 13.8-23.8c0-.1 .1-.1 .1-.2l11.5-20 56.3 97.5C366.9 440.1 314.2 464 256 464zM163.6 208l-56.3-97.5C145.1 71.9 197.8 48 256 48L189 164l-13.9 24-11.5 20zm87.8-56l56.3-97.5c54.8 14 100.9 49.8 128.5 97.5l-134 0-27.5 0-.3 0-23.1 0zm104.1 68.3c-.1-.1-.1-.2-.2-.3l-11.5-20 112.6 0c5 17.8 7.6 36.6 7.6 56c0 37.9-10.1 73.4-27.8 104l-67-116-13.7-23.7zM48 256c0-37.9 10.1-73.4 27.8-104l67 116 25.4 44L55.6 312c-5-17.8-7.6-36.6-7.6-56zM204.3 457.5c-54.8-14-100.9-49.8-128.5-97.5l134 0 50.8 0-56.3 97.5zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216.7 212c4.3-7.4 12.1-11.9 20.6-12l37.3 0c8.5 .1 16.3 4.6 20.5 11.8l18.7 32.3c4.2 7.4 4.2 16.4 0 23.8l-.1 .1-18.5 32 0 .1c-4.3 7.4-12.2 11.9-20.7 11.9l-36.9 0c-8.6 0-16.5-4.6-20.8-12l-18.5-32c-4.3-7.4-4.3-16.6 0-24l18.5-32z" />
    </Icon>
);

export default Aperture;