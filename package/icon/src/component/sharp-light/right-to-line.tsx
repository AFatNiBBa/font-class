
import { Icon } from "../../index";

/**
 * A component that renders the `right-to-line` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-to-line?s=sharp-light right-to-line}
 * @preview ![right-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/right-to-line.svg)
 */
const RightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 80l0-16 32 0 0 16 0 352 0 16-32 0 0-16 0-352zM144 304l32 0 0 32 0 48 17.7 0L308.9 256 193.7 128 176 128l0 48 0 32-32 0L32 208l0 96 112 0zm0 112l0-32 0-16 0-32-32 0-80 0L0 336l0-32 0-96 0-32 32 0 80 0 32 0 0-32 0-16 0-32 32 0 32 0L352 256 208 416l-32 0-32 0z" />
    </Icon>
);

export default RightToLine;