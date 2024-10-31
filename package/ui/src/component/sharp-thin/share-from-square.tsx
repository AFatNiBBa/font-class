
import { Icon } from "../../index";

/**
 * A component that renders the `share-from-square` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share-from-square?s=sharp-thin share-from-square}
 * @preview ![share-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/share-from-square.svg)
 */
const ShareFromSquare: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M400 240l0-16-16 0-57.5 0c-52.2 0-94.5 42.3-94.5 94.5c0 9.8 1.6 18.8 4.2 27c-3.6-2.2-7.2-4.7-10.8-7.3C195.3 316.8 168 285 168 240c0-79.5 64.5-144 144-144l72 0 16 0 0-16 0-64 9.4 0 144 144-144 144-9.4 0 0-64zM280 384s-11.7-9.6-21-25.9c-6-10.6-11-24.1-11-39.6c0-43.4 35.2-78.5 78.5-78.5l41.5 0 16 0 0 16 0 48 0 16 16 0 16 0L564.7 171.3 576 160l-11.3-11.3L416 0 400 0 384 0l0 16 0 48 0 16-16 0-56 0c-88.4 0-160 71.6-160 160c0 70.4 57.8 111.2 95.7 130.4C266.2 379.8 280 384 280 384zM8 32L0 32l0 8L0 504l0 8 8 0 464 0 8 0 0-8 0-112 0-8-16 0 0 8 0 104L16 496 16 48l136 0 8 0 0-16-8 0L8 32z" />
    </Icon>
);

export default ShareFromSquare;