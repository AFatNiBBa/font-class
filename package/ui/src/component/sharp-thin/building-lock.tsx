
import { Icon } from "../../index";

/**
 * A component that renders the `building-lock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-lock?s=sharp-thin building-lock}
 * @preview ![building-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/building-lock.svg)
 */
const BuildingLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 16l352 0 0 240c0-19.6 5.9-37.9 16-53.1L384 16l0-16L368 0 16 0 0 0 0 16 0 496l0 16 16 0 128 0 16 0 64 0 16 0 80 0 0-16-80 0 0-112 0-16-16 0-64 0-16 0 0 16 0 112L16 496 16 16zM160 496l0-112 64 0 0 112-64 0zM80 232l-8 0 0 8 0 64 0 8 8 0 64 0 8 0 0-8 0-64 0-8-8 0-64 0zm8 64l0-48 48 0 0 48-48 0zm144-64l0 8 0 64 0 8 8 0 64 0 8 0 0-8 0-64 0-8-8 0-64 0-8 0zm16 16l48 0 0 48-48 0 0-48zM80 104l-8 0 0 8 0 64 0 8 8 0 64 0 8 0 0-8 0-64 0-8-8 0-64 0zm8 64l0-48 48 0 0 48-48 0zm144-64l0 8 0 64 0 8 8 0 64 0 8 0 0-8 0-64 0-8-8 0-64 0-8 0zm16 16l48 0 0 48-48 0 0-48zm216 88c26.5 0 48 21.5 48 48l0 64-96 0 0-64c0-26.5 21.5-48 48-48zm-64 48l0 64-32 0-16 0 0 16 0 160 0 16 16 0 192 0 16 0 0-16 0-160 0-16-16 0-32 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM368 496l0-160 32 0 16 0 96 0 16 0 32 0 0 160-192 0z" />
    </Icon>
);

export default BuildingLock;