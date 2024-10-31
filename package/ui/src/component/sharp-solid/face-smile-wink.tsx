
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile-wink` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-wink?s=sharp-solid face-smile-wink}
 * @preview ![face-smile-wink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-smile-wink.svg)
 */
const FaceSmileWink: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM129.7 327.2l28.6-14.3c8.7 17.5 41.3 55.2 97.7 55.2s88.9-37.7 97.7-55.2l28.6 14.3C369.7 352.3 327.6 400 256 400s-113.7-47.7-126.3-72.8zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm148.4 29.6l-25.6-19.2c34.4-45.9 103.2-45.9 137.6 0l-25.6 19.2c-21.6-28.8-64.8-28.8-86.4 0z" />
    </Icon>
);

export default FaceSmileWink;