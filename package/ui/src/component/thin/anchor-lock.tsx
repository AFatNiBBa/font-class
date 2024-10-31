
import { Icon } from "../../index";

/**
 * A component that renders the `anchor-lock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor-lock?s=thin anchor-lock}
 * @preview ![anchor-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/anchor-lock.svg)
 */
const AnchorLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 80A64 64 0 1 1 224 80a64 64 0 1 1 128 0zM288 0c-44.2 0-80 35.8-80 80c0 41.5 31.6 75.6 72 79.6c0 .1 0 .3 0 .4l0 48-80 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l80 0 0 272-8 0C170.4 496 88 413.6 88 312l0-27.2 58.1 64.5c3 3.3 8 3.6 11.3 .6s3.6-8 .6-11.3l-72-80C84.4 257 82.3 256 80 256s-4.4 1-5.9 2.6l-72 80c-3 3.3-2.7 8.3 .6 11.3s8.3 2.7 11.3-.6L72 284.8 72 312c0 110.5 89.5 200 200 200l16 0 16 0c29.1 0 56.7-6.2 81.7-17.4c-1.1-4.7-1.7-9.6-1.7-14.6l0-2.3c-24.2 11.7-51.3 18.3-80 18.3l-8 0 0-272 80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0 0-48c0-.1 0-.3 0-.4c40.4-4 72-38.1 72-79.6c0-44.2-35.8-80-80-80zM528 208c26.5 0 48 21.5 48 48l0 64-96 0 0-64c0-26.5 21.5-48 48-48zm-64 48l0 64-16 0c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-16 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-16 80l16 0 16 0 96 0 16 0 16 0c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default AnchorLock;