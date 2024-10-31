
import { Icon } from "../../index";

/**
 * A component that renders the `anchor-lock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor-lock?s=sharp-thin anchor-lock}
 * @preview ![anchor-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/anchor-lock.svg)
 */
const AnchorLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 80A64 64 0 1 1 224 80a64 64 0 1 1 128 0zM288 0c-44.2 0-80 35.8-80 80c0 41.5 31.6 75.6 72 79.6c0 .1 0 .3 0 .4l0 48-80 0-8 0 0 16 8 0 80 0 0 272L88 496l0-204.7 58.3 58.3 11.3-11.3-72-72L80 260.7l-5.6 5.6s0 0 0 0l-72 72 11.3 11.3L72 291.3 72 504l0 8 8 0 208 0 96 0 0-16-88 0 0-272 80 0 8 0 0-16-8 0-80 0 0-48c0-.1 0-.3 0-.4c40.4-4 72-38.1 72-79.6c0-44.2-35.8-80-80-80zM528 208c26.5 0 48 21.5 48 48l0 64-96 0 0-64c0-26.5 21.5-48 48-48zm-64 48l0 64-32 0-16 0 0 16 0 160 0 16 16 0 192 0 16 0 0-16 0-160 0-16-16 0-32 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-32 80l32 0 16 0 96 0 16 0 32 0 0 160-192 0 0-160z" />
    </Icon>
);

export default AnchorLock;