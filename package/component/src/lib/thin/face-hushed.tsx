
import { Icon } from "../../index";

/**
 * A component that renders the `face-hushed` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-hushed?s=thin face-hushed}
 * @preview ![face-hushed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-hushed.svg)
 */
const FaceHushed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176.4-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm144 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM192.5 144c-32.5 2-61.6 16.5-82.7 38.7c-3 3.2-8.1 3.3-11.3 .3s-3.3-8.1-.3-11.3c23.7-25.1 56.6-41.4 93.3-43.7c4.4-.3 8.2 3.1 8.5 7.5s-3.1 8.2-7.5 8.5zM312 135.5c.3-4.4 4.1-7.8 8.5-7.5c36.7 2.3 69.6 18.6 93.3 43.7c3 3.2 2.9 8.3-.3 11.3s-8.3 2.9-11.3-.3C381.1 160.5 352 146 319.5 144c-4.4-.3-7.8-4.1-7.5-8.5zM304 384a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-112 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default FaceHushed;