
import { Icon } from "../../index";

/**
 * A component that renders the `ballot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ballot?s=sharp-solid ballot}
 * @preview ![ballot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ballot.svg)
 */
const Ballot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 0L0 0 0 512l448 0L448 0zM64 96l64 0 0 64-64 0 0-64zm0 128l64 0 0 64-64 0 0-64zm64 128l0 64-64 0 0-64 64 0zm64 16l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32zm16-256l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0zM192 240l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32z" />
    </Icon>
);

export default Ballot;