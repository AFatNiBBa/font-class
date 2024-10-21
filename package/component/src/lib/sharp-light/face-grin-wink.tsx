
import { Icon } from "../../index";

/**
 * A component that renders the `face-grin-wink` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-wink?s=sharp-light face-grin-wink}
 * @preview ![face-grin-wink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-grin-wink.svg)
 */
const FaceGrinWink: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 98.1c-31.2 0-61.4-2.9-89.9-8.3c22.5 23.6 54.5 38.3 89.9 38.3s67.4-14.7 89.9-38.3c-28.5 5.4-58.7 8.3-89.9 8.3zm0-32c41 0 79.9-5.3 114.9-14.9c13-3.5 25.4-7.7 37.2-12.3c-3.1 13.8-8 26.9-14.5 39c-26.2 48.9-78 82.2-137.7 82.2s-111.5-33.3-137.7-82.2c-6.5-12.1-11.4-25.2-14.5-39c11.8 4.6 24.3 8.8 37.2 12.3c35.1 9.6 74 14.9 114.9 14.9zM152.4 208a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm140.4 29.6l-25.6-19.2c34.4-45.9 103.2-45.9 137.6 0l-25.6 19.2c-21.6-28.8-64.8-28.8-86.4 0z" />
    </Icon>
);

export default FaceGrinWink;