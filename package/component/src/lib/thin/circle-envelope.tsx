
import { Icon } from "../../index";

/**
 * A component that renders the `circle-envelope` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-envelope?s=thin circle-envelope}
 * @preview ![circle-envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-envelope.svg)
 */
const CircleEnvelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm160-80c-8.8 0-16 7.2-16 16l0 7.3 4.2 2.5L245.3 261c3.2 2 6.9 3 10.7 3s7.5-1 10.7-3l97.2-59.2 4.2-2.5 0-7.3c0-8.8-7.2-16-16-16l-192 0zm208 42l-93 56.6c-5.7 3.5-12.3 5.3-19 5.3s-13.3-1.8-19-5.3L144 218l0 102c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16l0-102zM160 160l192 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default CircleEnvelope;