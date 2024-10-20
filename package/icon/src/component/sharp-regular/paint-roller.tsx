
import { Icon } from "../../index";

/**
 * A component that renders the `paint-roller` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paint-roller?s=sharp-regular paint-roller}
 * @preview ![paint-roller](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/paint-roller.svg)
 */
const PaintRoller: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 48L48 48l0 96 320 0 0-96zM48 0L368 0l48 0 0 48 0 24 0 48 0 24 0 48-48 0L48 192 0 192l0-48L0 48 0 0 48 0zM248 320l40 0 0 192-128 0 0-192 40 0 0-64 0-24 24 0 240 0 0-112-16 0 0-48 40 0 24 0 0 24 0 160 0 24-24 0-240 0 0 40z" />
    </Icon>
);

export default PaintRoller;