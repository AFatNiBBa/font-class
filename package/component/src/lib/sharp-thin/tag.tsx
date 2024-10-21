
import { Icon } from "../../index";

/**
 * A component that renders the `tag` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tag?s=sharp-thin tag}
 * @preview ![tag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tag.svg)
 */
const Tag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 457.4L16 249.4 16 48l201.4 0 208 208L224 457.4zM436.7 244.7L224 32 16 32 0 32 0 48 0 256 212.7 468.7 224 480l11.3-11.3L436.7 267.3 448 256l-11.3-11.3zM112 184a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM88 144a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Tag;