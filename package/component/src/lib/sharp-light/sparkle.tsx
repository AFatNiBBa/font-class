
import { Icon } from "../../index";

/**
 * A component that renders the `sparkle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkle?s=sharp-light sparkle}
 * @preview ![sparkle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sparkle.svg)
 */
const Sparkle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M298.7 330.7l113.6-56.8L448 256l-35.8-17.9L298.7 181.3 241.9 67.8 224 32 206.1 67.8 149.3 181.3 35.8 238.1 0 256l35.8 17.9 113.6 56.8 56.8 113.6L224 480l17.9-35.8 56.8-113.6zM224 408.4l-46-92.1-4.8-9.5-9.5-4.8L71.6 256l92.1-46 9.5-4.8 4.8-9.5 46-92.1 46 92.1 4.8 9.5 9.5 4.8 92.1 46-92.1 46-9.5 4.8-4.8 9.5-46 92.1z" />
    </Icon>
);

export default Sparkle;