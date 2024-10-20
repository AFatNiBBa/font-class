
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-pointer` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-pointer?s=sharp-solid arrow-pointer}
 * @preview ![arrow-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-pointer.svg)
 */
const ArrowPointer: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 32L0 46.9 0 432l29 31.8 96.1-117.2 48.2 102.7 13.6 29 57.9-27.2-13.6-29L183.3 320 320 320l-.1-42L32 32z" />
    </Icon>
);

export default ArrowPointer;