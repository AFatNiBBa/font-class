
import { Icon } from "../../index";

/**
 * A component that renders the `folder-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-check?s=sharp-solid folder-check}
 * @preview ![folder-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/folder-check.svg)
 */
const FolderCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 480L0 480 0 32l224 0 48 64 240 0 0 384zM241 369L385 225 351 191l-127 127-63-63L127 289l80 80 17 17 17-17z" />
    </Icon>
);

export default FolderCheck;