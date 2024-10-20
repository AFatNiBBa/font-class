
import { Icon } from "../../index";

/**
 * A component that renders the `face-tired` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-tired?s=sharp-solid face-tired}
 * @preview ![face-tired](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-tired.svg)
 */
const FaceTired: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-128c-48.9 0-93.5 16.8-127.4 44.3c-.4-4.1-.6-8.2-.6-12.3c0-70.7 57.3-128 128-128s128 57.3 128 128c0 4.2-.2 8.3-.6 12.3C349.5 400.8 304.9 384 256 384zM112 144l118.9 64L112 272l45.7-64L112 144zm169.1 64L400 144l-45.7 64L400 272 281.1 208z" />
    </Icon>
);

export default FaceTired;