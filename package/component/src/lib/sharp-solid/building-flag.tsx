
import { Icon } from "../../index";

/**
 * A component that renders the `building-flag` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-flag?s=sharp-solid building-flag}
 * @preview ![building-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/building-flag.svg)
 */
const BuildingFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 0L0 0 0 512l144 0 0-128 96 0 0 128 144 0L384 0zM64 224l64 0 0 64-64 0 0-64zm160 0l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zM128 96l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zm160 0l0 64-64 0 0-64 64 0zM480 0L416 0l0 32 0 480 64 0 0-320 160 0 0-160L480 32l0-32z" />
    </Icon>
);

export default BuildingFlag;