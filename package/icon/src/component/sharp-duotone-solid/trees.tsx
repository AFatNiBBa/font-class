
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trees` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trees?s=sharp-duotone-solid trees}
 * @preview ![trees](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trees.svg)
 */
const Trees: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 384l0 32 160 0 0-200 0-32 64 0 0 32 0 200 160 0 0-32-80-96 48 0 0-32-80-96 48 0 0-32L192 0 64 128l0 32 48 0L32 256l0 32 48 0L0 384zM340.3 192l36.3 43.5 7.4 8.9 0 11.6 0 32 0 32-11.7 0 36.3 43.5 7.4 8.9L416 216l0-32 64 0 0 32 0 200 160 0 0-32-80-96 48 0 0-32-80-96 48 0 0-32L448 0 342.6 105.4l9.4 9.4 0 13.3 0 32 0 32-11.7 0z" />
        <path d="M224 216l0-32-64 0 0 32 0 264 0 32 64 0 0-32 0-264zm256 0l0-32-64 0 0 32 0 264 0 32 64 0 0-32 0-264z" />
    </Icon>
);

export default Trees;