
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone-blank` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone-blank?s=sharp-regular tombstone-blank}
 * @preview ![tombstone-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tombstone-blank.svg)
 */
const TombstoneBlank: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M368 192l0 240 48 0 0-240C416 86 330 0 224 0S32 86 32 192l0 240 48 0 0-240c0-79.5 64.5-144 144-144s144 64.5 144 144zM24 464L0 464l0 48 24 0 400 0 24 0 0-48-24 0L24 464z" />
    </Icon>
);

export default TombstoneBlank;