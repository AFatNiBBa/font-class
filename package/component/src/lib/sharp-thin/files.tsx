
import { Icon } from "../../index";

/**
 * A component that renders the `files` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/files?s=sharp-thin files}
 * @preview ![files](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/files.svg)
 */
const Files: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 400l288 0 0-288-88 0-8 0 0-8 0-88L144 16l0 384zM344 0l96 96 8 8 0 296 0 16-16 0-288 0-16 0 0-16 0-384 0-16 16 0L344 0zm8 96l65.4 0L352 30.6 352 96zM16 96l80 0 0 16-80 0 0 384 288 0 0-48 16 0 0 48 0 16-16 0L16 512 0 512l0-16L0 112 0 96l16 0z" />
    </Icon>
);

export default Files;