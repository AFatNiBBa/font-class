
import { Icon } from "../../index";

/**
 * A component that renders the `timeline` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timeline?s=sharp-thin timeline}
 * @preview ![timeline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/timeline.svg)
 */
const Timeline: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 32l0 96 96 0 0-96-96 0zM96 16l16 0 96 0 16 0 0 16 0 96 0 16-16 0-40 0 0 112 304 0 0-112-40 0-16 0 0-16 0-96 0-16 16 0 96 0 16 0 0 16 0 96 0 16-16 0-40 0 0 112 144 0 8 0 0 16-8 0-304 0 0 96 40 0 16 0 0 16 0 96 0 16-16 0-96 0-16 0 0-16 0-96 0-16 16 0 40 0 0-96L8 272l-8 0 0-16 8 0 144 0 0-112-40 0-16 0 0-16 0-96 0-16zM528 128l0-96-96 0 0 96 40 0 16 0 40 0zM272 384l0 96 96 0 0-96-96 0z" />
    </Icon>
);

export default Timeline;