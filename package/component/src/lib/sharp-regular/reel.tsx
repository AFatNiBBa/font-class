
import { Icon } from "../../index";

/**
 * A component that renders the `reel` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reel?s=sharp-regular reel}
 * @preview ![reel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/reel.svg)
 */
const Reel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 0L0 0 0 48l24 0 40 0 0 24 0 40 40 0 240 0 40 0 0-40 0-24 40 0 24 0 0-48L424 0 384 0 344 0 104 0 64 0 24 0zm80 72l0-24 240 0 0 24L104 72zM24 464L0 464l0 48 24 0 40 0 40 0 240 0 40 0 40 0 24 0 0-48-24 0-40 0 0-24 0-40-40 0-240 0-40 0 0 40 0 24-40 0zm320 0l-240 0 0-24 240 0 0 24zM64 176l320 0 0-32L64 144l0 32zm0 64l368 0 16 0 0-32-16 0L64 208l0 32zm0 64l320 0 0-32L64 272l0 32zm0 64l320 0 0-32L64 336l0 32z" />
    </Icon>
);

export default Reel;