
import { Icon } from "../../index";

/**
 * A component that renders the `skull-crossbones` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull-crossbones?s=sharp-solid skull-crossbones}
 * @preview ![skull-crossbones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/skull-crossbones.svg)
 */
const SkullCrossbones: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M368 128c0 44.4-25.4 83.5-64 106.4l0 53.6-160 0 0-53.6c-38.6-23-64-62.1-64-106.4C80 57.3 144.5 0 224 0s144 57.3 144 128zM168 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM16.7 245.4l29 13.6L224 343l178.4-84 29-13.6 27.3 57.9-29 13.6L299.1 378.4l130.5 61.4 29 13.6-27.3 57.9-29-13.6L224 413.8l-178.4 84-29 13.6-27.3-57.9 29-13.6 130.5-61.4L18.4 317l-29-13.6 27.3-57.9z" />
    </Icon>
);

export default SkullCrossbones;