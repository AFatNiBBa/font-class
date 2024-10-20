
import { Icon } from "../../index";

/**
 * A component that renders the `thumbs-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbs-down?s=sharp-regular thumbs-down}
 * @preview ![thumbs-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/thumbs-down.svg)
 */
const ThumbsDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 480l24 0 96 0 24 0 0-24 0-33c0-30.3-5.9-59.8-16.9-87l96.9 0 40 0 24 0 0-24 0-80 0-24-16 0 0-40 0-24-24 0 0-40 0-24-24 0 0-24 0-24-24 0-40 0L272 32l-12.1 0-7.3 0-6 4-10.1 6.7L160 93.8l0 57.7L263.1 82.7l4-2.7 4.8 0 112 0 16 0 0 24 0 24 24 0 0 40 0 24 24 0 0 40 0 24 16 0 0 32-16 0-136.1 0-43.5 0 23.2 36.8C309.8 353.7 320 387.6 320 423l0 9-48 0 0-9c0-49.8-27.2-95.6-70.9-119.4l-4.6-2.5-18.6-10.1-5.4-2.9-6.1 0-2.4 0-4 0 0 48 .3 0 13.2 7.2 4.6 2.5C206.4 361.2 224 390.8 224 423l0 33 0 24zm-96-96l0-288L0 96 0 384l128 0z" />
    </Icon>
);

export default ThumbsDown;