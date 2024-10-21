
import { Icon } from "../../index";

/**
 * A component that renders the `chair` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chair?s=sharp-thin chair}
 * @preview ![chair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chair.svg)
 */
const Chair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 16l0 240-16 0 0-240-56 0 0 240-16 0 0-240-56 0 0 240-16 0 0-240L80 16l0 240-16 0L64 16 64 0 80 0 368 0l16 0 0 16 0 240-16 0 0-240-64 0zM16 368l416 0 0-12.2L406.1 304 41.9 304 16 355.8 16 368zM0 368l0-16 32-64 384 0 32 64 0 16 0 16-16 0-32 0 0 120 0 8-16 0 0-8 0-120L64 384l0 120 0 8-16 0 0-8 0-120-32 0L0 384l0-16z" />
    </Icon>
);

export default Chair;