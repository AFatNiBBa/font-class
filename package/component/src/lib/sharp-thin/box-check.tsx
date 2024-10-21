
import { Icon } from "../../index";

/**
 * A component that renders the `box-check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-check?s=sharp-thin box-check}
 * @preview ![box-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/box-check.svg)
 */
const BoxCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M17.5 176L216 176l0-128L74.4 48 17.5 176zm413 0L373.6 48 232 48l0 128 198.5 0zM16 192l0 272 416 0 0-272L16 192zM64 32l320 0 64 144 0 288 0 16-16 0L16 480 0 480l0-16L0 176 64 32zM325.7 261.7l-128 128-5.7 5.7-5.7-5.7-64-64-5.7-5.7L128 308.7l5.7 5.7L192 372.7 314.3 250.3l5.7-5.7L331.3 256l-5.7 5.7z" />
    </Icon>
);

export default BoxCheck;