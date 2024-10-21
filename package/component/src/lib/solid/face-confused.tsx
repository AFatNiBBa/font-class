
import { Icon } from "../../index";

/**
 * A component that renders the `face-confused` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-confused?s=solid face-confused}
 * @preview ![face-confused](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/face-confused.svg)
 */
const FaceConfused: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM171.1 395.6l-1.1 .9c-6.9 5.5-17 4.4-22.5-2.5s-4.4-17 2.5-22.5l1.1-.9C205 327.5 272 304 341 304l11 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-11 0c-61.8 0-121.7 21-169.9 59.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceConfused;