
import { Icon } from "../../index";

/**
 * A component that renders the `bridge-lock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-lock?s=thin bridge-lock}
 * @preview ![bridge-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bridge-lock.svg)
 */
const BridgeLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M40 32c-4.4 0-8 3.6-8 8s3.6 8 8 8l80 0 0 96-80 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l488 0 72 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0 0-96 80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L40 32zM389.6 325.7c2.8-6.2 6.5-11.9 11.1-16.8C387.1 277.8 356.1 256 320 256c-48.6 0-88 39.4-88 88l0 96c0 13.3-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24l0-96c0-48.6-39.4-88-88-88l-24 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l24 0c39.8 0 72 32.2 72 72l0 96c0 22.1 17.9 40 40 40l32 0c22.1 0 40-17.9 40-40l0-96c0-39.8 32.2-72 72-72c33.4 0 61.5 22.8 69.6 53.7zM504 48l0 96-112 0 0-96 112 0zM376 48l0 96-112 0 0-96 112 0zM248 48l0 96-112 0 0-96 112 0zM528 208c26.5 0 48 21.5 48 48l0 64-96 0 0-64c0-26.5 21.5-48 48-48zm-64 48l0 64-16 0c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-16 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-16 80l16 0 16 0 96 0 16 0 16 0c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default BridgeLock;