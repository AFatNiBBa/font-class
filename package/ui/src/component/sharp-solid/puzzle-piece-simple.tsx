
import { Icon } from "../../index";

/**
 * A component that renders the `puzzle-piece-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/puzzle-piece-simple?s=sharp-solid puzzle-piece-simple}
 * @preview ![puzzle-piece-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/puzzle-piece-simple.svg)
 */
const PuzzlePieceSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 144c0-17.8 12.9-33.3 32-41.6L288 64 128 64l0 160-38.4 0c-8.3-19.1-23.8-32-41.6-32c-26.5 0-48 28.7-48 64s21.5 64 48 64c17.8 0 33.3-12.9 41.6-32l38.4 0 0 160 160 0 0-38.4c-19.1-8.3-32-23.8-32-41.6c0-26.5 28.7-48 64-48s64 21.5 64 48c0 17.8-12.9 33.3-32 41.6l0 38.4 160 0 0-160 38.4 0c8.3 19.1 23.8 32 41.6 32c26.5 0 48-28.7 48-64s-21.5-64-48-64c-17.8 0-33.3 12.9-41.6 32L512 224l0-160L352 64l0 38.4c19.1 8.3 32 23.8 32 41.6c0 26.5-28.7 48-64 48s-64-21.5-64-48z" />
    </Icon>
);

export default PuzzlePieceSimple;