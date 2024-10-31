
import { Icon } from "../../index";

/**
 * A component that renders the `cat-space` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cat-space?s=sharp-solid cat-space}
 * @preview ![cat-space](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cat-space.svg)
 */
const CatSpace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 160c0 70.7-57.3 128-128 128s-128-57.3-128-128c0-32.5 12.1-62.1 32-84.7l0 84.7c0 53 43 96 96 96s96-43 96-96l0-84.7c19.9 22.6 32 52.2 32 84.7zM416 96L374.9 54.9C395.6 40.5 420.8 32 448 32s52.4 8.5 73.1 22.9L480 96l-64 0zm64 220.8C553 302 608 237.4 608 160C608 71.6 536.4 0 448 0S288 71.6 288 160c0 11.7 1.3 23.1 3.6 34.1c-54.9 8.1-102.2 39.5-131.6 83.8l0-85.8c0-53-43-96-96-96L32 96l0 64 32 0c17.7 0 32 14.3 32 32l0 288 0 32 32 0 208 0 32 0 0-64-32 0-56 0L416 339.2 416 480l0 32 64 0 0-32 0-163.2zM400 160a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM241.3 46.7L224 0 206.7 46.7 160 64l46.7 17.3L224 128l17.3-46.7L288 64 241.3 46.7z" />
    </Icon>
);

export default CatSpace;