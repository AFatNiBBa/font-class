
import { Icon } from "../../index";

/**
 * A component that renders the `text-size` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-size?s=sharp-regular text-size}
 * @preview ![text-size](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/text-size.svg)
 */
const TextSize: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M24 32L0 32 0 56l0 72 0 24 48 0 0-24 0-48 120 0 0 352-48 0-24 0 0 48 24 0 144 0 24 0 0-48-24 0-48 0 0-352 120 0 0 48 0 24 48 0 0-24 0-72 0-24-24 0L24 32zM336 224l-24 0 0 24 0 48 0 24 48 0 0-24 0-24 96 0 0 160-32 0-24 0 0 48 24 0 112 0 24 0 0-48-24 0-32 0 0-160 88 0 0 24 0 24 48 0 0-24 0-48 0-24-24 0-280 0z" />
    </Icon>
);

export default TextSize;