
import { Icon } from "../../index";

/**
 * A component that renders the `circle-6` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-6?s=thin circle-6}
 * @preview ![circle-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-6.svg)
 */
const Circle_6: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm46-381.3c-2.9-3.3-8-3.7-11.3-.8l-97.9 85.7c-8.7 7.6-15.9 16.6-21.2 26.6C164.2 255.8 160 271.4 160 288c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-4.3 0-8.6 .3-12.8 .8L301.3 142c3.3-2.9 3.7-8 .8-11.3zM256.1 208A80 80 0 1 1 256 368a80 80 0 1 1 .1-160z" />
    </Icon>
);

export default Circle_6;