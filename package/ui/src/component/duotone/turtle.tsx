
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turtle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turtle?s=duotone turtle}
 * @preview ![turtle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/turtle.svg)
 */
const Turtle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 352c0 17.7 14.3 32 32 32l32 0 0 56c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-56 32 0 0 56c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-56.2c57.8-3.4 105.9-42.8 122.1-96c1.9 .2 3.9 .3 5.9 .3l32 0c35.3 0 64-28.7 64-64l0-16c0-53-43-96-96-96c-35.3 0-64 28.7-64 64l0 16 0 32 0 24c0 39.8-32.2 72-72 72l-32 0-48 0-112 0-48 0-72 0c-17.7 0-32 14.3-32 32zM512 208a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M384 249.2V208c0-97.2-78.8-176-176-176S32 110.8 32 208v41.2C32 270.6 49.4 288 70.8 288H345.2c21.4 0 38.8-17.4 38.8-38.8z" />
    </Icon>
);

export default Turtle;