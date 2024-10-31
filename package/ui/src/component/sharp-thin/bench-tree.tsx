
import { Icon } from "../../index";

/**
 * A component that renders the `bench-tree` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bench-tree?s=sharp-thin bench-tree}
 * @preview ![bench-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bench-tree.svg)
 */
const BenchTree: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M591 108.6c.6-4.1 1-8.3 1-12.6c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 4.3 .3 8.5 1 12.6l1.5 9.7-8 5.8C410.4 135.7 400 154.7 400 176l0 64 224 0 0-64c0-21.3-10.4-40.3-26.6-51.9l-8-5.8 1.5-9.7zM384 176c0-26.7 13.1-50.3 33.2-64.9c-.8-4.9-1.2-10-1.2-15.1c0-53 43-96 96-96s96 43 96 96c0 5.1-.4 10.2-1.2 15.1C626.9 125.7 640 149.3 640 176l0 64 0 16-16 0-104 0 0 248 0 8-16 0 0-8 0-248-104 0-16 0 0-16 0-64zM48 208l0 96 24 0 16 0 208 0 16 0 24 0 0-96L48 208zM72 320l-24 0-16 0 0-16 0-96 0-16 16 0 288 0 16 0 0 16 0 96 0 16-16 0-24 0 0 64 24 0 40 0 8 0 0 16-8 0-32 0 0 104 0 8-16 0 0-8 0-104-24 0L80 400l-24 0 0 104 0 8-16 0 0-8 0-104L8 400l-8 0 0-16 8 0 40 0 24 0 0-64zm16 0l0 64 208 0 0-64L88 320z" />
    </Icon>
);

export default BenchTree;