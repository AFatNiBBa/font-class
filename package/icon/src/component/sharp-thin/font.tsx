
import { Icon } from "../../index";

/**
 * A component that renders the `font` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font?s=sharp-thin font}
 * @preview ![font](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/font.svg)
 */
const Font: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M216.6 37l2-5 10.8 0 2 5 174 427 34.6 0 8 0 0 16-8 0-96 0-8 0 0-16 8 0 44.1 0L336 336 112 336 59.9 464l44.1 0 8 0 0 16-8 0L8 480l-8 0 0-16 8 0 34.6 0 174-427zm-98 283l210.9 0L224 61.2 118.6 320z" />
    </Icon>
);

export default Font;