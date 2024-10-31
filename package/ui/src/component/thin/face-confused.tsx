
import { Icon } from "../../index";

/**
 * A component that renders the `face-confused` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-confused?s=thin face-confused}
 * @preview ![face-confused](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-confused.svg)
 */
const FaceConfused: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM163 392.8l-5.6 5.1c-3.3 3-8.3 2.7-11.3-.5s-2.7-8.3 .5-11.3l5.6-5.1c54.5-49.5 125.5-77 199.1-77l8.7 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-8.7 0c-69.7 0-136.8 26-188.3 72.8zM160.4 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default FaceConfused;