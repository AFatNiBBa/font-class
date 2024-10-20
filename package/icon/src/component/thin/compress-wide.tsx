
import { Icon } from "../../index";

/**
 * A component that renders the `compress-wide` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compress-wide?s=thin compress-wide}
 * @preview ![compress-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/compress-wide.svg)
 */
const CompressWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 72c0-4.4 3.6-8 8-8s8 3.6 8 8l0 144c0 4.4-3.6 8-8 8L8 224c-4.4 0-8-3.6-8-8s3.6-8 8-8l136 0 0-136zm8 216c4.4 0 8 3.6 8 8l0 144c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-136L8 304c-4.4 0-8-3.6-8-8s3.6-8 8-8l144 0zM368 72l0 136 136 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-144 0c-4.4 0-8-3.6-8-8l0-144c0-4.4 3.6-8 8-8s8 3.6 8 8zm-8 216l144 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-136 0 0 136c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-144c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default CompressWide;