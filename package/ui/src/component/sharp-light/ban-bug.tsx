
import { Icon } from "../../index";

/**
 * A component that renders the `ban-bug` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban-bug?s=sharp-light ban-bug}
 * @preview ![ban-bug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ban-bug.svg)
 */
const BanBug: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480C132.3 480 32 379.7 32 256c0-56.1 20.6-107.4 54.7-146.7l316 316C363.4 459.4 312.1 480 256 480zm80-166.6l0-15.2 46 5.8 15.9 2 4-31.8-15.9-2-50-6.2 0-21.4 51.9-13 15.5-3.9-7.8-31-15.5 3.9-44.1 11 0-26.9 40.9-27.2 13.3-8.9-17.8-26.6-13.3 8.9-41.1 27.4L288 128l-64 0-36.7 36.7-78-78C148.6 52.6 199.9 32 256 32c123.7 0 224 100.3 224 224c0 56.1-20.6 107.4-54.7 146.7L336 313.4zM209.9 187.3L237.3 160l37.5 0L304 189.3l0 89.7-.3 2.1-93.8-93.8zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 265.9l-50 6.2-15.9 2 4 31.8 15.9-2 46-5.8 0 29.3-40.9 27.3-13.3 8.9 17.8 26.6 13.3-8.9 41.1-27.4L224 384l64 0 14.1-14.1-22.6-22.6-4.7 4.7-37.5 0L208 322.7l0-46.9-32-32 0 22z" />
    </Icon>
);

export default BanBug;