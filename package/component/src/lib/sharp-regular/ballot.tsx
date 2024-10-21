
import { Icon } from "../../index";

/**
 * A component that renders the `ballot` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ballot?s=sharp-regular ballot}
 * @preview ![ballot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ballot.svg)
 */
const Ballot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 48l0 416L48 464 48 48l352 0zM48 0L0 0 0 48 0 464l0 48 48 0 352 0 48 0 0-48 0-416 0-48L400 0 48 0zM80 96l0 64 64 0 0-64L80 96zm64 128l-64 0 0 64 64 0 0-64zM80 352l0 64 64 0 0-64-64 0zM200 104l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0zm0 128l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0zm0 128l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default Ballot;