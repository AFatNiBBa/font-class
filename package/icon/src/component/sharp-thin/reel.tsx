
import { Icon } from "../../index";

/**
 * A component that renders the `reel` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reel?s=sharp-thin reel}
 * @preview ![reel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/reel.svg)
 */
const Reel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 0L8 0 72 0 376 0l64 0 8 0 0 16-8 0-56 0 0 80 0 8-8 0L72 104l-8 0 0-8 0-80L8 16 0 16 0 0zM80 16l0 72 288 0 0-72L80 16zM64 152l8 0 304 0 8 0 0 16-8 0L72 168l-8 0 0-16zm0 64l8 0 368 0 8 0 0 16-8 0L72 232l-8 0 0-16zm0 64l8 0 304 0 8 0 0 16-8 0L72 296l-8 0 0-16zm0 64l8 0 304 0 8 0 0 16-8 0L72 360l-8 0 0-16zM8 512l-8 0 0-16 8 0 56 0 0-80 0-8 8 0 304 0 8 0 0 8 0 80 56 0 8 0 0 16-8 0-64 0L72 512 8 512zm72-88l0 72 288 0 0-72L80 424z" />
    </Icon>
);

export default Reel;