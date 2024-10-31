
import { Icon } from "../../index";

/**
 * A component that renders the `compress-wide` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compress-wide?s=sharp-thin compress-wide}
 * @preview ![compress-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/compress-wide.svg)
 */
const CompressWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 72l0-8 16 0 0 8 0 144 0 8-8 0L8 224l-8 0 0-16 8 0 136 0 0-136zm8 216l8 0 0 8 0 144 0 8-16 0 0-8 0-136L8 304l-8 0 0-16 8 0 144 0zM368 72l0 136 136 0 8 0 0 16-8 0-144 0-8 0 0-8 0-144 0-8 16 0 0 8zm-8 216l144 0 8 0 0 16-8 0-136 0 0 136 0 8-16 0 0-8 0-144 0-8 8 0z" />
    </Icon>
);

export default CompressWide;