
import { Icon, generic } from "../../index";

/**
 * A component that renders the `subtitles` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/subtitles?s=sharp-duotone-solid subtitles}
 * @preview ![subtitles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/subtitles.svg)
 */
const Subtitles: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l576 0 0-448L0 32zM96 240l24 0 176 0 24 0 0 48-24 0-176 0-24 0 0-48zm0 96l24 0 80 0 24 0 0 48-24 0-80 0-24 0 0-48zm160 0l24 0 176 0 24 0 0 48-24 0-176 0-24 0 0-48zm96-96l24 0 80 0 24 0 0 48-24 0-80 0-24 0 0-48z" />
        <path d="M96 240l24 0 176 0 24 0 0 48-24 0-176 0-24 0 0-48zm256 0l24 0 80 0 24 0 0 48-24 0-80 0-24 0 0-48zM96 336l24 0 80 0 24 0 0 48-24 0-80 0-24 0 0-48zm160 0l24 0 176 0 24 0 0 48-24 0-176 0-24 0 0-48z" />
    </Icon>
);

export default Subtitles;