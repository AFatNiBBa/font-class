
import { Icon } from "../../index";

/**
 * A component that renders the `face-unamused` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-unamused?s=sharp-solid face-unamused}
 * @preview ![face-unamused](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-unamused.svg)
 */
const FaceUnamused: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM96 192l16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32l-32 0-16 0 0-32zm208 0l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32l-32 0-16 0 0-32 16 0zm12.1 202.7c-11.7-13-31.6-26.7-60.1-26.7s-48.4 13.7-60.1 26.7l-10.7 11.9-23.8-21.4 10.7-11.9C188.2 355.4 216.3 336 256 336s67.8 19.4 83.9 37.3l10.7 11.9-23.8 21.4-10.7-11.9z" />
    </Icon>
);

export default FaceUnamused;