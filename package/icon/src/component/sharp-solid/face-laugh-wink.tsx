
import { Icon } from "../../index";

/**
 * A component that renders the `face-laugh-wink` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-laugh-wink?s=sharp-solid face-laugh-wink}
 * @preview ![face-laugh-wink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-laugh-wink.svg)
 */
const FaceLaughWink: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-80c-83 0-151.2-63.1-159.2-144l318.4 0c-8 80.9-76.2 144-159.2 144zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm148.4 29.6l-25.6-19.2c34.4-45.9 103.2-45.9 137.6 0l-25.6 19.2c-21.6-28.8-64.8-28.8-86.4 0z" />
    </Icon>
);

export default FaceLaughWink;