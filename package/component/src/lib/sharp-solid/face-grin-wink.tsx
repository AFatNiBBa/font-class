
import { Icon } from "../../index";

/**
 * A component that renders the `face-grin-wink` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-wink?s=sharp-solid face-grin-wink}
 * @preview ![face-grin-wink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-grin-wink.svg)
 */
const FaceGrinWink: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm.3-180.2c59.1 0 114.1-10.6 160.2-29C400.3 376.7 334.7 432 256.3 432s-144-55.3-160.2-129.2c46.2 18.3 101.2 29 160.2 29zm122.9-94.2c-21.6-28.8-64.8-28.8-86.4 0l-25.6-19.2c34.4-45.9 103.2-45.9 137.6 0l-25.6 19.2zM176.4 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceGrinWink;