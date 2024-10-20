
import { Icon } from "../../index";

/**
 * A component that renders the `peapod` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peapod?s=solid peapod}
 * @preview ![peapod](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/peapod.svg)
 */
const Peapod: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 0L416 0C186.2 0 0 186.2 0 416l0 48c0 26.5 21.5 48 48 48l48 0c229.8 0 416-186.2 416-416l0-48c0-26.5-21.5-48-48-48zM256 200a56 56 0 1 1 0 112 56 56 0 1 1 0-112zM88 368a56 56 0 1 1 112 0A56 56 0 1 1 88 368zM368 88a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
    </Icon>
);

export default Peapod;