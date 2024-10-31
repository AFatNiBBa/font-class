
import { Icon } from "../../index";

/**
 * A component that renders the `code-fork` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-fork?s=light code-fork}
 * @preview ![code-fork](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/code-fork.svg)
 */
const CodeFork: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm80-48c0 38.7-27.5 71-64 78.4L96 192c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-33.6c-36.5-7.4-64-39.7-64-78.4c0-44.2 35.8-80 80-80s80 35.8 80 80c0 38.7-27.5 71-64 78.4l0 33.6c0 44.2-35.8 80-80 80l-64 0 0 81.6c36.5 7.4 64 39.7 64 78.4c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-38.7 27.5-71 64-78.4l0-81.6-64 0c-44.2 0-80-35.8-80-80l0-33.6C27.5 151 0 118.7 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm64 304a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM416 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default CodeFork;