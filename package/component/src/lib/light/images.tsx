
import { Icon } from "../../index";

/**
 * A component that renders the `images` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/images?s=light images}
 * @preview ![images](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/images.svg)
 */
const Images: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 64l352 0c17.7 0 32 14.3 32 32l0 105.4L486.6 144c-12.5-12.5-32.8-12.5-45.3 0L304 281.4 230.6 208c-12.5-12.5-32.8-12.5-45.3 0L128 265.4 128 96c0-17.7 14.3-32 32-32zM576 96c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64l0 208 0 16c0 35.3 28.7 64 64 64l80 0c0 0 0 0 0 0l272 0c35.3 0 64-28.7 64-64l0-80c0 0 0 0 0-.1l0-144zM464 166.6l80 80 0 73.4c0 17.7-14.3 32-32 32l-233.4 0 36.7-36.7L464 166.6zM281.4 304l-48 48L160 352c-17.7 0-32-14.3-32-32l0-9.4 80-80L281.4 304zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16L0 352c0 70.7 57.3 128 128 128l336 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-336 0c-53 0-96-43-96-96l0-240zm232 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Images;