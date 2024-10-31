
import { Icon } from "../../index";

/**
 * A component that renders the `vector-circle` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-circle?s=solid vector-circle}
 * @preview ![vector-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/vector-circle.svg)
 */
const VectorCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 9.3C392.2 62.8 449.2 119.8 470.7 192l9.3 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-9.3 0C449.2 392.2 392.2 449.2 320 470.7l0 9.3c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-9.3C119.8 449.2 62.8 392.2 41.3 320L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l9.3 0C62.8 119.8 119.8 62.8 192 41.3l0-9.3zM403.7 194.4c-16.2-38.9-47.3-70-86.2-86.2C312.7 119.9 301.3 128 288 128l-64 0c-13.3 0-24.7-8.1-29.6-19.7c-38.9 16.2-70 47.3-86.2 86.2c11.6 4.8 19.7 16.2 19.7 29.6l0 64c0 13.3-8.1 24.7-19.7 29.6c16.2 38.9 47.3 70 86.2 86.2c4.8-11.6 16.2-19.7 29.6-19.7l64 0c13.3 0 24.7 8.1 29.6 19.7c38.9-16.2 70-47.3 86.2-86.2C392.1 312.7 384 301.3 384 288l0-64c0-13.3 8.1-24.7 19.7-29.6zM240 48l0 32 32 0 0-32-32 0zm32 384l-32 0 0 32 32 0 0-32zM432 240l0 32 32 0 0-32-32 0zM80 240l-32 0 0 32 32 0 0-32z" />
    </Icon>
);

export default VectorCircle;