
import { Icon } from "../../index";

/**
 * A component that renders the `desktop` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/desktop?s=sharp-thin desktop}
 * @preview ![desktop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/desktop.svg)
 */
const Desktop: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 16l0 384-215.8 0-.3 0-111.7 0-.3 0L16 400 16 16l544 0zM16 416l206.6 0-13.3 80L136 496l-8 0 0 16 8 0 80 0 144 0 80 0 8 0 0-16-8 0-73.2 0-13.3-80L560 416l16 0 0-16 0-384 0-16L560 0 16 0 0 0 0 16 0 400l0 16 16 0zm209.4 80l13.3-80 98.4 0 13.3 80-125.1 0zM80 80l416 0 0 192L80 272 80 80zM64 64l0 16 0 192 0 16 16 0 416 0 16 0 0-16 0-192 0-16-16 0L80 64 64 64z" />
    </Icon>
);

export default Desktop;