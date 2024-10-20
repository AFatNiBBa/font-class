
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ballot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ballot?s=sharp-duotone-solid ballot}
 * @preview ![ballot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ballot.svg)
 */
const Ballot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l448 0L448 0 0 0zM64 96l64 0 0 64-64 0 0-64zm0 128l64 0 0 64-64 0 0-64zm0 128l64 0 0 64-64 0 0-64zM192 112l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32zm0 128l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32zm0 128l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32z" />
        <path d="M64 96l64 0 0 64-64 0 0-64zm0 128l64 0 0 64-64 0 0-64zm64 128l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default Ballot;