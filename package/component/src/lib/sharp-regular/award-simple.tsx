
import { Icon } from "../../index";

/**
 * A component that renders the `award-simple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/award-simple?s=sharp-regular award-simple}
 * @preview ![award-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/award-simple.svg)
 */
const AwardSimple: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M236.2 26.9L192 0 147.8 26.9 96 25.7 71.2 71.2 25.7 96l1.2 51.8L0 192l26.9 44.2L25.7 288l45.4 24.8L96 358.3l3.5-.1 48.3-1.1L192 384l44.2-26.9 48.3 1.1 3.5 .1 24.8-45.4L358.3 288l-1.2-51.8L384 192l-26.9-44.2L358.3 96 312.8 71.2 288 25.7l-51.8 1.2zm23.7 47.5l10.8 19.8 6.8 12.4 12.4 6.8 19.8 10.8-.5 22.5-.3 14.1 7.3 12L327.8 192l-11.7 19.3-7.3 12 .3 14.1 .5 22.5-19.8 10.8-12.4 6.8-6.8 12.4-10.8 19.8-22.5-.5-14.1-.3-12 7.3L192 327.8l-19.3-11.7-12-7.3-14.1 .3-22.5 .5-10.8-19.8-6.8-12.4-12.4-6.8L74.4 259.9l.5-22.5 .3-14.1-7.3-12L56.2 192l11.7-19.3 7.3-12-.3-14.1-.5-22.5 19.8-10.8 12.4-6.8 6.8-12.4 10.8-19.8 22.5 .5 14.1 .3 12-7.3L192 56.2l19.3 11.7 12 7.3 14.1-.3 22.5-.5zM256 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM64 512l128-48 128 48L291.9 390.4l-4.7-.1-42.4-1-36.2 22.1L192 421.5l-16.6-10.1-36.2-22.1-42.4 1-4.7 .1L64 512z" />
    </Icon>
);

export default AwardSimple;