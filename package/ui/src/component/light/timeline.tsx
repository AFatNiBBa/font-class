
import { Icon } from "../../index";

/**
 * A component that renders the `timeline` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timeline?s=light timeline}
 * @preview ![timeline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/timeline.svg)
 */
const Timeline: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm16 94c27.6-7.1 48-32.2 48-62c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 29.8 20.4 54.9 48 62l0 114L16 256c-8.8 0-16 7.2-16 16s7.2 16 16 16l304 0 0 82c-27.6 7.1-48 32.2-48 62c0 35.3 28.7 64 64 64s64-28.7 64-64c0-29.8-20.4-54.9-48-62l0-82 272 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-112 0 0-114c27.6-7.1 48-32.2 48-62c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 29.8 20.4 54.9 48 62l0 114-320 0 0-114zM336 464a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM496 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Timeline;