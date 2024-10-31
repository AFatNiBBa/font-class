
import { Icon } from "../../index";

/**
 * A component that renders the `building-lock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-lock?s=sharp-regular building-lock}
 * @preview ![building-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/building-lock.svg)
 */
const BuildingLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 48l288 0 0 240 16 0 0-16c0-30.5 12.2-58.2 32-78.4L384 48l0-48L336 0 48 0 0 0 0 48 0 464l0 48 48 0 272 0 0-48-80 0 0-112-96 0 0 112-96 0L48 48zM88 88l0 80 80 0 0-80L88 88zm208 0l-80 0 0 80 80 0 0-80zM88 216l0 80 80 0 0-80-80 0zm208 0l-80 0 0 80 80 0 0-80zm168 24c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48-32 0 0 192 224 0 0-192-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default BuildingLock;