
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard-check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-check?s=sharp-thin clipboard-check}
 * @preview ![clipboard-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clipboard-check.svg)
 */
const ClipboardCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M254.7 67.2C248.8 38 222.9 16 192 16s-56.8 22-62.7 51.2L126.7 80l-13.1 0L80 80l0 64 112 0 112 0 0-64-33.6 0-13.1 0-2.6-12.8zM80 64l33.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64L304 64l16 0 0 16 0 16 56 0 8 0 0 8 0 400 0 8-8 0L8 512l-8 0 0-8L0 104l0-8 8 0 56 0 0-16 0-16 16 0zM64 112l-48 0 0 384 352 0 0-384-48 0 0 32 0 16-16 0-112 0L80 160l-16 0 0-16 0-32zM176 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM293.7 261.7l-128 128-5.7 5.7-5.7-5.7-64-64L84.7 320 96 308.7l5.7 5.7L160 372.7 282.3 250.3l5.7-5.7L299.3 256l-5.7 5.7z" />
    </Icon>
);

export default ClipboardCheck;