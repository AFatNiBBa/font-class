
import { Icon } from "../../index";

/**
 * A component that renders the `subtitles` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/subtitles?s=sharp-solid subtitles}
 * @preview ![subtitles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/subtitles.svg)
 */
const Subtitles: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 32L0 32 0 480l576 0 0-448zM120 240l176 0 24 0 0 48-24 0-176 0-24 0 0-48 24 0zm256 0l80 0 24 0 0 48-24 0-80 0-24 0 0-48 24 0zM120 336l80 0 24 0 0 48-24 0-80 0-24 0 0-48 24 0zm160 0l176 0 24 0 0 48-24 0-176 0-24 0 0-48 24 0z" />
    </Icon>
);

export default Subtitles;