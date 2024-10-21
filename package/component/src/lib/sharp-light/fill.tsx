
import { Icon } from "../../index";

/**
 * A component that renders the `fill` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fill?s=sharp-light fill}
 * @preview ![fill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/fill.svg)
 */
const Fill: typeof Icon = x => (
    <Icon {...x}>
        <path d="M22.6 294.6L0 272l22.6-22.6L140.7 131.3l-96-96L33.4 24 56 1.4 67.3 12.7l96 96 86.1-86.1L272 0l22.6 22.6L489.4 217.4 512 240l-22.6 22.6L262.6 489.4 240 512l-22.6-22.6L22.6 294.6zM163.3 153.9L45.3 272l16 16 357.5 0 48-48L272 45.3l-86.1 86.1 81.4 81.4L278.6 224 256 246.6l-11.3-11.3-81.4-81.4zM240 466.7L386.7 320 93.3 320 240 466.7z" />
    </Icon>
);

export default Fill;