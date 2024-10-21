
import { Icon } from "../../index";

/**
 * A component that renders the `paint-roller` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paint-roller?s=light paint-roller}
 * @preview ![paint-roller](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/paint-roller.svg)
 */
const PaintRoller: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 32c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L64 128c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l288 0zm64 32c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 96c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-32zM240 352c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16l32 0zm-32-32c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l0-32c0-17.7 14.3-32 32-32l176 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64l0 32c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-176 0c-35.3 0-64 28.7-64 64l0 32z" />
    </Icon>
);

export default PaintRoller;