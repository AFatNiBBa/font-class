
import { Icon } from "../../index";

/**
 * A component that renders the `subtitles` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/subtitles?s=sharp-thin subtitles}
 * @preview ![subtitles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/subtitles.svg)
 */
const Subtitles: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 48l0 416 544 0 0-416L16 48zM0 32l16 0 544 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM112 272l192 0 8 0 0 16-8 0-192 0-8 0 0-16 8 0zm256 0l96 0 8 0 0 16-8 0-96 0-8 0 0-16 8 0zM112 368l96 0 8 0 0 16-8 0-96 0-8 0 0-16 8 0zm160 0l192 0 8 0 0 16-8 0-192 0-8 0 0-16 8 0z" />
    </Icon>
);

export default Subtitles;