
import { Icon } from "../../index";

/**
 * A component that renders the `sparkle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkle?s=sharp-thin sparkle}
 * @preview ![sparkle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sparkle.svg)
 */
const Sparkle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M298.7 330.7l131.4-65.7L448 256l-17.9-8.9L298.7 181.3 232.9 49.9 224 32l-8.9 17.9L149.3 181.3 17.9 247.1 0 256l17.9 8.9 131.4 65.7 65.7 131.4L224 480l8.9-17.9 65.7-131.4zM224 444.2L163.6 323.5l-2.4-4.8-4.8-2.4L35.8 256l120.7-60.4 4.8-2.4 2.4-4.8L224 67.8l60.4 120.7 2.4 4.8 4.8 2.4L412.2 256 291.5 316.4l-4.8 2.4-2.4 4.8L224 444.2z" />
    </Icon>
);

export default Sparkle;