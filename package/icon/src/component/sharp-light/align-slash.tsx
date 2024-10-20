
import { Icon } from "../../index";

/**
 * A component that renders the `align-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-slash?s=sharp-light align-slash}
 * @preview ![align-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/align-slash.svg)
 */
const AlignSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32.5 10L19.9 .1 .1 25.3l12.6 9.9L607.8 502.2l12.6 9.9 19.8-25.2-12.6-9.9L32.5 10zM528 336l16 0 0-32-16 0-43.9 0 40.5 32 3.4 0zm0-128l16 0 0-32-16 0-206 0 40.5 32L528 208zm-372.1 0l-40.5-32-3.4 0-16 0 0 32 16 0 43.9 0zM528 48L159.8 48l40.5 32L528 80l16 0 0-32-16 0zm-210 288l-40.5-32L112 304l-16 0 0 32 16 0 206 0zm121.6 96L112 432l-16 0 0 32 16 0 368.2 0-40.5-32z" />
    </Icon>
);

export default AlignSlash;