
import { Icon } from "../../index";

/**
 * A component that renders the `typewriter` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/typewriter?s=light typewriter}
 * @preview ![typewriter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/typewriter.svg)
 */
const Typewriter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 32c-17.7 0-32 14.3-32 32l0 96-32 0 0-96C64 28.7 92.7 0 128 0L356.1 0c17 0 33.3 6.7 45.3 18.7l27.9 27.9c12 12 18.7 28.3 18.7 45.3l0 68.1-32 0 0-68.1c0-8.5-3.4-16.6-9.4-22.6L378.7 41.4c-6-6-14.1-9.4-22.6-9.4L128 32zM32 224l0 64 32 0 384 0 32 0 0-64-114.7 0L352 237.3c-12 12-28.3 18.7-45.3 18.7l-101.5 0c-17 0-33.3-6.7-45.3-18.7l22.6-22.6c6 6 14.1 9.4 22.6 9.4l101.5 0c8.5 0 16.6-3.4 22.6-9.4l13.3-13.3c6-6 14.1-9.4 22.6-9.4L480 192c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 128c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-128c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l114.7 0c8.5 0 16.6 3.4 22.6 9.4l13.3 13.3L160 237.3 146.7 224 32 224zm32 96l0 128c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-128L64 320zm96 96l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16-48a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm48 16a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm80-16a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm48 16a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm80-16a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
    </Icon>
);

export default Typewriter;