
import { Icon } from "../../index";

/**
 * A component that renders the `face-hushed` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-hushed?s=sharp-thin face-hushed}
 * @preview ![face-hushed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-hushed.svg)
 */
const FaceHushed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176.4-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm144 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM192.5 144c-32.5 2-61.6 16.5-82.7 38.7l-5.5 5.8-11.6-11 5.5-5.8c23.7-25.1 56.6-41.4 93.3-43.7l8-.5 1 16-8 .5zm119-.5l1-16 8 .5c36.7 2.3 69.6 18.6 93.3 43.7l5.5 5.8-11.6 11-5.5-5.8C381.1 160.5 352 146 319.5 144l-8-.5zM304 384a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-112 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default FaceHushed;