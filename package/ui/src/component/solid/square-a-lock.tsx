
import { Icon } from "../../index";

/**
 * A component that renders the `square-a-lock` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-a-lock?s=solid square-a-lock}
 * @preview ![square-a-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-a-lock.svg)
 */
const SquareALock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l256 0 0-96c-9.1 0-17.7-5.2-21.8-13.9l-12-26.1-124.4 0-12 26.1c-5.6 12-19.8 17.3-31.8 11.7s-17.3-19.8-11.7-31.8l96-208c3.9-8.5 12.4-13.9 21.8-13.9s17.9 5.4 21.8 13.9l82.4 178.6c5.6-10 13.9-18.3 23.8-24l0-24.6c0-56.4 41.7-103.1 96-110.9L448 96c0-35.3-28.7-64-64-64L64 32zM224 209.3L184 296l80 0-40-86.7zM464 240c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default SquareALock;