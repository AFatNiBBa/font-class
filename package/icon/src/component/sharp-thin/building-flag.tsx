
import { Icon } from "../../index";

/**
 * A component that renders the `building-flag` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-flag?s=sharp-thin building-flag}
 * @preview ![building-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/building-flag.svg)
 */
const BuildingFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 16l0 480 128 0 0-112 0-16 16 0 64 0 16 0 0 16 0 112 128 0 0-480L16 16zM160 496l64 0 0-112-64 0 0 112zm-16 16L16 512 0 512l0-16L0 16 0 0 16 0 368 0l16 0 0 16 0 480 0 16-16 0-128 0-16 0-64 0-16 0zM80 232l64 0 8 0 0 8 0 64 0 8-8 0-64 0-8 0 0-8 0-64 0-8 8 0zm8 64l48 0 0-48-48 0 0 48zm144-64l8 0 64 0 8 0 0 8 0 64 0 8-8 0-64 0-8 0 0-8 0-64 0-8zm16 16l0 48 48 0 0-48-48 0zM80 104l64 0 8 0 0 8 0 64 0 8-8 0-64 0-8 0 0-8 0-64 0-8 8 0zm8 64l48 0 0-48-48 0 0 48zm144-64l8 0 64 0 8 0 0 8 0 64 0 8-8 0-64 0-8 0 0-8 0-64 0-8zm16 16l0 48 48 0 0-48-48 0zM432 0l0 8 0 24 192 0 16 0 0 16 0 144 0 16-16 0-192 0 0 296 0 8-16 0 0-8 0-296 0-16 0-144 0-16 0-24 0-8 16 0zm0 192l192 0 0-144L432 48l0 144z" />
    </Icon>
);

export default BuildingFlag;