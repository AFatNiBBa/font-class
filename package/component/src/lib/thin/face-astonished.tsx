
import { Icon } from "../../index";

/**
 * A component that renders the `face-astonished` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-astonished?s=thin face-astonished}
 * @preview ![face-astonished](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-astonished.svg)
 */
const FaceAstonished: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm304 96c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48s48-21.5 48-48l0-32zm-112 0c0-35.3 28.7-64 64-64s64 28.7 64 64l0 32c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-32zM160.4 224a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM200 119.5c.3 4.4-3.1 8.2-7.5 8.5c-32.5 2-61.6 16.5-82.7 38.7c-3 3.2-8.1 3.3-11.3 .3s-3.3-8.1-.3-11.3c23.7-25.1 56.6-41.4 93.3-43.7c4.4-.3 8.2 3.1 8.5 7.5zM319.5 128c-4.4-.3-7.8-4.1-7.5-8.5s4.1-7.8 8.5-7.5c36.7 2.3 69.6 18.6 93.3 43.7c3 3.2 2.9 8.3-.3 11.3s-8.3 2.9-11.3-.3C381.1 144.5 352 130 319.5 128z" />
    </Icon>
);

export default FaceAstonished;