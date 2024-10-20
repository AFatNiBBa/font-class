
import { Icon } from "../../index";

/**
 * A component that renders the `circle-6` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-6?s=sharp-thin circle-6}
 * @preview ![circle-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-6.svg)
 */
const Circle_6: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm37-384L192.8 215.6c-8.6 7.6-15.7 16.5-21.1 26.3c-7.5 13.7-11.7 29.3-11.7 46c0 0 0 0 0 0c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-4.3 0-8.6 .3-12.8 .8L317.3 128 293 128zM256.1 368A80 80 0 1 1 256 208a80 80 0 1 1 .1 160z" />
    </Icon>
);

export default Circle_6;