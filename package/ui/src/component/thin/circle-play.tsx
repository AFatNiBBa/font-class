
import { Icon } from "../../index";

/**
 * A component that renders the `circle-play` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-play?s=thin circle-play}
 * @preview ![circle-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-play.svg)
 */
const CirclePlay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM196.1 161c2.5-1.4 5.6-1.4 8.1 .2l144 88c2.4 1.5 3.8 4 3.8 6.8s-1.4 5.4-3.8 6.8l-144 88c-2.5 1.5-5.6 1.6-8.1 .2s-4.1-4.1-4.1-7l0-176c0-2.9 1.6-5.6 4.1-7zm16.4-13.5c-7.4-4.5-16.7-4.7-24.3-.5s-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88z" />
    </Icon>
);

export default CirclePlay;