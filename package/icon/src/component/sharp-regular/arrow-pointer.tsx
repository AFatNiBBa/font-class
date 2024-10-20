
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-pointer` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-pointer?s=sharp-regular arrow-pointer}
 * @preview ![arrow-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-pointer.svg)
 */
const ArrowPointer: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M170.5 320L272 320l48 0-.1-42-7-6L32 32 0 46.9 0 423.4 0 432l29 31.8 30.8-37.5 68.4-83.4 53.7 115.3L192 479.9l43.5-20.3-10.1-21.8L170.5 320zm-60.7-30.4L48 364.9l0-256.1L239 272l-92.1 0-22.7 0-14.4 17.6z" />
    </Icon>
);

export default ArrowPointer;