
import { Icon } from "../../index";

/**
 * A component that renders the `chess-king` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king?s=thin chess-king}
 * @preview ![chess-king](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chess-king.svg)
 */
const ChessKing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0c4.4 0 8 3.6 8 8l0 48 56 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-56 0 0 88 176 0c22.1 0 40 17.9 40 40l0 1.9c0 5-.9 10-2.8 14.6L379.5 384l-17.2 0 68.1-173.3c1.1-2.8 1.7-5.8 1.7-8.8l0-1.9c0-13.3-10.7-24-24-24L40 176c-13.3 0-24 10.7-24 24l0 1.9c0 3 .6 6 1.7 8.8L85.7 384l-17.2 0L2.8 216.6C.9 211.9 0 206.9 0 201.9L0 200c0-22.1 17.9-40 40-40l176 0 0-88-56 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l56 0 0-48c0-4.4 3.6-8 8-8zM94.3 432c-4.5 0-8.9 1.9-11.9 5.3L51.8 471.2c-2.5 2.7-3.8 6.3-3.8 9.9c0 8.2 6.6 14.8 14.8 14.8l322.3 0c8.2 0 14.8-6.6 14.8-14.8c0-3.7-1.4-7.2-3.8-9.9l-30.6-33.9c-3-3.4-7.4-5.3-11.9-5.3L94.3 432zm313.8 28.5c5.1 5.7 7.9 13 7.9 20.6c0 17-13.8 30.8-30.8 30.8L62.8 512c-17 0-30.8-13.8-30.8-30.8c0-7.6 2.8-15 7.9-20.6l30.6-33.9c6.1-6.7 14.7-10.6 23.8-10.6l259.5 0c9.1 0 17.7 3.8 23.8 10.6l30.6 33.9z" />
    </Icon>
);

export default ChessKing;