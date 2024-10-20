
import { Icon } from "../../index";

/**
 * A component that renders the `files` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/files?s=sharp-light files}
 * @preview ![files](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/files.svg)
 */
const Files: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 384l0-352 176 0 0 96 0 16 16 0 96 0 0 240-288 0zM336 57.5L390 112l-54 0 0-54.5zM324 0L128 0 96 0l0 32 0 352 0 32 32 0 288 0 32 0 0-32 0-259L324 0zM32 112l0-16L0 96l0 16L0 496l0 16 16 0 320 0 16 0 0-32-16 0L32 480l0-368z" />
    </Icon>
);

export default Files;