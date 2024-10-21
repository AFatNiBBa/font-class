
import { Icon } from "../../index";

/**
 * A component that renders the `backward-fast` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-fast?s=sharp-light backward-fast}
 * @preview ![backward-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/backward-fast.svg)
 */
const BackwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64l0 16 0 138L224 86l32-22 0 38.8L256 240 480 86l32-22 0 38.8 0 306.3 0 38.8-32-22L256 272l0 137.2 0 38.8-32-22L32 294l0 138 0 16L0 448l0-16L0 272l0-32L0 80 0 64l32 0zm192 60.8L33.2 256 224 387.2l0-262.3zM289.2 256L480 387.2l0-262.3L289.2 256z" />
    </Icon>
);

export default BackwardFast;