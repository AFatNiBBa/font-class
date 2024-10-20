
import { Icon } from "../../index";

/**
 * A component that renders the `building-flag` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-flag?s=sharp-light building-flag}
 * @preview ![building-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/building-flag.svg)
 */
const BuildingFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 32l0 448 96 0 0-80 0-32 32 0 64 0 32 0 0 32 0 80 96 0 0-448L32 32zM160 480l64 0 0-80-64 0 0 80zm-32 32l-96 0L0 512l0-32L0 32 0 0 32 0 352 0l32 0 0 32 0 448 0 32-32 0-96 0-32 0-64 0-32 0zM64 96l16 0 64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16 0-64 0-16zm32 32l0 32 32 0 0-32-32 0zM240 96l64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16 0-64 0-16 16 0zm16 64l32 0 0-32-32 0 0 32zM64 224l16 0 64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16 0-64 0-16zm32 32l0 32 32 0 0-32-32 0zm144-32l64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16 0-64 0-16 16 0zm16 64l32 0 0-32-32 0 0 32zM448 0l0 16 0 16 160 0 32 0 0 32 0 128 0 32-32 0-160 0 0 272 0 16-32 0 0-16 0-272 0-32 0-128 0-32 0-16 0-16 32 0zm0 192l160 0 0-128L448 64l0 128z" />
    </Icon>
);

export default BuildingFlag;