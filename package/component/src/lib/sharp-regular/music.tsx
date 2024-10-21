
import { Icon } from "../../index";

/**
 * A component that renders the `music` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music?s=sharp-regular music}
 * @preview ![music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/music.svg)
 */
const Music: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512-.3L512 32l0 112 0 224s0 0 0 0c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c17.5 0 33.9 3.9 48 10.7l0-122.4L192 257.9 192 432s0 0 0 0c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c17.5 0 33.9 3.9 48 10.7L144 240l0-112 0-17.9 17.1-5.1 320-96L512-.3zM464 368c0-9.8-12.9-32-48-32s-48 22.2-48 32s12.9 32 48 32s48-22.1 48-32c0 0 0 0 0 0zM96 400c-35.1 0-48 22.2-48 32s12.9 32 48 32s48-22.1 48-32c0 0 0 0 0 0c0-9.8-12.9-32-48-32zm96-192.3l272-81.6 0-61.9L192 145.9l0 61.9z" />
    </Icon>
);

export default Music;