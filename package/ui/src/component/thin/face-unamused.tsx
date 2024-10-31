
import { Icon } from "../../index";

/**
 * A component that renders the `face-unamused` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-unamused?s=thin face-unamused}
 * @preview ![face-unamused](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-unamused.svg)
 */
const FaceUnamused: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM322.1 397.4C309.3 383.1 287.3 368 256 368s-53.3 15.1-66.1 29.4c-3 3.3-8 3.6-11.3 .6s-3.6-8-.6-11.3C193.1 370 219.1 352 256 352s62.9 18 77.9 34.6c3 3.3 2.7 8.3-.6 11.3s-8.3 2.7-11.3-.6zM104 192l72 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32c0-5.8 1.6-11.3 4.3-16L104 208c-4.4 0-8-3.6-8-8s3.6-8 8-8zm72 16a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm112-8c0-4.4 3.6-8 8-8l72 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32c0-5.8 1.6-11.3 4.3-16L296 208c-4.4 0-8-3.6-8-8zm64 24a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
    </Icon>
);

export default FaceUnamused;