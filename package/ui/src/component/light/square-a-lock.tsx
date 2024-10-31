
import { Icon } from "../../index";

/**
 * A component that renders the `square-a-lock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-a-lock?s=light square-a-lock}
 * @preview ![square-a-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-a-lock.svg)
 */
const SquareALock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 64l320 0c17.7 0 32 14.3 32 32l0 74.8c9.9-4.7 20.7-8 32-9.6L448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.6 0 96L0 416c0 35.3 28.7 64 64 64l256 0 0-32L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32zm174.3 72.8c-2.7-5.4-8.3-8.8-14.3-8.8s-11.6 3.4-14.3 8.8l-112 224c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2L145.9 336l156.2 0L320 371.8l0-19.8c0-12.2 3.4-23.5 9.3-33.2l-91-181.9zM224 179.8L286.1 304l-124.2 0L224 179.8zM464 224c26.5 0 48 21.5 48 48l0 48-96 0 0-48c0-26.5 21.5-48 48-48zm-80 48l0 48c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 80l160 0 0 128-160 0 0-128z" />
    </Icon>
);

export default SquareALock;