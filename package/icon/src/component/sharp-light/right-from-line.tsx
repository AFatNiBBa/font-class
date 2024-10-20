
import { Icon } from "../../index";

/**
 * A component that renders the `right-from-line` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-from-line?s=sharp-light right-from-line}
 * @preview ![right-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/right-from-line.svg)
 */
const RightFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 304l32 0 0 32 0 48 17.7 0L404.9 256 289.7 128 272 128l0 48 0 32-32 0-112 0 0 96 112 0zm0 112l0-32 0-16 0-32-32 0-80 0-32 0 0-32 0-96 0-32 32 0 80 0 32 0 0-32 0-16 0-32 32 0 32 0L448 256 304 416l-32 0-32 0zM0 80L0 64l32 0 0 16 0 352 0 16L0 448l0-16L0 80z" />
    </Icon>
);

export default RightFromLine;