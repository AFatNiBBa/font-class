
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone-blank` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone-blank?s=thin tombstone-blank}
 * @preview ![tombstone-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tombstone-blank.svg)
 */
const TombstoneBlank: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 192l0 272 16 0 0-272C416 86 330 0 224 0S32 86 32 192l0 272 16 0 0-272C48 94.8 126.8 16 224 16s176 78.8 176 176zM8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8l432 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 496z" />
    </Icon>
);

export default TombstoneBlank;