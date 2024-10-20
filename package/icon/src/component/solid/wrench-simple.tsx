
import { Icon } from "../../index";

/**
 * A component that renders the `wrench-simple` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wrench-simple?s=solid wrench-simple}
 * @preview ![wrench-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/wrench-simple.svg)
 */
const WrenchSimple: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M132.7 164.7l48 48c6.2 6.2 16.4 6.2 22.6 0l48-48c3-3 4.7-7.1 4.7-11.3l0-135.8c0-11 10.9-18.7 20.8-13.8C340.3 35 384 100.4 384 176c0 71.1-38.6 133.1-96 166.3L288 464c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-121.7C38.6 309.1 0 247.1 0 176C0 100.4 43.7 35 107.2 3.7C117.1-1.2 128 6.5 128 17.6l0 135.8c0 4.2 1.7 8.3 4.7 11.3z" />
    </Icon>
);

export default WrenchSimple;