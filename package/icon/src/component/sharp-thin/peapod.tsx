
import { Icon } from "../../index";

/**
 * A component that renders the `peapod` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peapod?s=sharp-thin peapod}
 * @preview ![peapod](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/peapod.svg)
 */
const Peapod: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 16C195.1 16 16 195.1 16 416l0 80 80 0c220.9 0 400-179.1 400-400l0-80-80 0zm0-16l80 0 16 0 0 16 0 80c0 229.8-186.2 416-416 416l-80 0L0 512l0-16 0-80C0 186.2 186.2 0 416 0zM304 144a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm64 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-112 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm48 64a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM144 304a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm48 64a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default Peapod;