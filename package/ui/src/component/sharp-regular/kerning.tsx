
import { Icon } from "../../index";

/**
 * A component that renders the `kerning` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kerning?s=sharp-regular kerning}
 * @preview ![kerning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/kerning.svg)
 */
const Kerning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M442.6 41.5l9.5-22L408 .5l-9.5 22-193.1 448-9.5 22 44.1 19 9.5-22 193.1-448zM1.4 96L138.1 401.8l6.4 14.2 31.1 0 6.4-14.2L318.6 96 266 96 160 333.2 54 96 1.4 96zm463.1 0l-6.3 14.2L321.4 416l52.6 0 28.6-64 154.9 0L586 416l52.6 0L501.9 110.2 495.6 96l-31.1 0zM480 178.8L536 304 424 304l56-125.2z" />
    </Icon>
);

export default Kerning;