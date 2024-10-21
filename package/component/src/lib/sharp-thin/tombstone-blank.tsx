
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone-blank` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone-blank?s=sharp-thin tombstone-blank}
 * @preview ![tombstone-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tombstone-blank.svg)
 */
const TombstoneBlank: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 192l0 272 16 0 0-272C416 86 330 0 224 0S32 86 32 192l0 272 16 0 0-272C48 94.8 126.8 16 224 16s176 78.8 176 176zM8 496l-8 0 0 16 8 0 432 0 8 0 0-16-8 0L8 496z" />
    </Icon>
);

export default TombstoneBlank;