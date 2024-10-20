
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablet-rugged` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-rugged?s=sharp-duotone-solid tablet-rugged}
 * @preview ![tablet-rugged](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tablet-rugged.svg)
 */
const TabletRugged: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 96 32 16 0 16L0 208l0 96 32 16 0 16L0 352l0 96 32 16 0 48 64 0 256 0 64 0 0-48 32-16 0-96-32-16 0-16 32-16 0-96-32-16 0-16 32-16 0-96L416 48l0-48L352 0 96 0 32 0l0 48L0 64zm96 0l256 0 0 384L96 448 96 64z" />
        <path d="M96 64H352V448H96V64z" />
    </Icon>
);

export default TabletRugged;