
import { Icon } from "../../index";

/**
 * A component that renders the `tags` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tags?s=sharp-thin tags}
 * @preview ![tags](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tags.svg)
 */
const Tags: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 457.4L16 249.4 16 48l201.4 0L400 230.6l0 50.7-176 176zM416 224L224 32 16 32 0 32 0 48 0 256 212.7 468.7 224 480l11.3-11.3L416 288l0-64zM344 36.7L332.7 48l5.7 5.7L494.2 209.6l0 92.9L338.3 458.3l-5.7 5.7L344 475.3l5.7-5.7L507.9 311.4l2.3-2.3 0-3.3 0-99.5 0-3.3-2.3-2.3L349.7 42.3 344 36.7zM152 144a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm-40-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Tags;