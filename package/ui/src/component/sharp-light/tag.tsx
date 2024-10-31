
import { Icon } from "../../index";

/**
 * A component that renders the `tag` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tag?s=sharp-light tag}
 * @preview ![tag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tag.svg)
 */
const Tag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 434.7L32 242.7 32 64l178.7 0 192 192L224 434.7zM425.4 233.4L224 32 32 32 0 32 0 64 0 256 201.4 457.4 224 480l22.6-22.6L425.4 278.6 448 256l-22.6-22.6zM112 168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Tag;