
import { Icon } from "../../index";

/**
 * A component that renders the `face-frown` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-frown?s=sharp-solid face-frown}
 * @preview ![face-frown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-frown.svg)
 */
const FaceFrown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.3 388.7L154.5 404 124 394.5l4.7-15.3C145.2 326.1 196.3 288 256 288s110.8 38.1 127.3 91.3l4.7 15.3L357.5 404l-4.7-15.3C340.5 349.4 302.1 320 256 320s-84.5 29.4-96.7 68.7zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceFrown;