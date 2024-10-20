
import { Icon } from "../../index";

/**
 * A component that renders the `face-confused` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-confused?s=sharp-light face-confused}
 * @preview ![face-confused](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-confused.svg)
 */
const FaceConfused: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM171.1 395.6l-1.1 .9-20-25 1.1-.9C205 327.5 272 304 341 304l11 0 0 32-11 0c-61.8 0-121.7 21-169.9 59.6zM152.4 208a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default FaceConfused;