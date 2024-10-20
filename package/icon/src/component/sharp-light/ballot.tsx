
import { Icon } from "../../index";

/**
 * A component that renders the `ballot` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ballot?s=sharp-light ballot}
 * @preview ![ballot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ballot.svg)
 */
const Ballot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 32l0 448L32 480 32 32l384 0zM32 0L0 0 0 32 0 480l0 32 32 0 384 0 32 0 0-32 0-448 0-32L416 0 32 0zM160 112l0 32 16 0 176 0 16 0 0-32-16 0-176 0-16 0zm0 128l0 32 16 0 176 0 16 0 0-32-16 0-176 0-16 0zm0 128l0 32 16 0 176 0 16 0 0-32-16 0-176 0-16 0zM120 104l-48 0 0 48 48 0 0-48zM72 232l0 48 48 0 0-48-48 0zm48 128l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default Ballot;