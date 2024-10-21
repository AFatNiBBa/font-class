
import { Icon } from "../../index";

/**
 * A component that renders the `square-envelope` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-envelope?s=light square-envelope}
 * @preview ![square-envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-envelope.svg)
 */
const SquareEnvelope: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM352 160l0 29.2L231.3 255.6c-2.2 1.2-4.7 1.9-7.3 1.9s-5.1-.6-7.3-1.9L96 189.2 96 160l256 0zm0 65.7L352 352 96 352l0-126.3 105.3 57.9c7 3.8 14.8 5.8 22.7 5.8s15.8-2 22.7-5.8L352 225.7zM96 128c-17.7 0-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32L96 128z" />
    </Icon>
);

export default SquareEnvelope;