
import { Icon } from "../../index";

/**
 * A component that renders the `clapperboard` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard?s=sharp-solid clapperboard}
 * @preview ![clapperboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clapperboard.svg)
 */
const Clapperboard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M361.9 32l-1 1-127 127 92.1 0 1-1 127-127-92.1 0zM512 160l0-118.1L393.9 160 512 160zM294.1 32l-92.1 0-1 1L73.9 160l92.1 0 1-1 127-127zM0 32L0 160l6.1 0 1-1 127-127L0 32zM512 192L0 192 0 480l512 0 0-288z" />
    </Icon>
);

export default Clapperboard;