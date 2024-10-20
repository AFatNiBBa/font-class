
import { Icon, generic } from "../../index";

/**
 * A component that renders the `distribute-spacing-horizontal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/distribute-spacing-horizontal?s=duotone distribute-spacing-horizontal}
 * @preview ![distribute-spacing-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/distribute-spacing-horizontal.svg)
 */
const DistributeSpacingHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 144c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 224c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-224z" />
        <path d="M56 0C42.7 0 32 10.7 32 24l0 464c0 13.3 10.7 24 24 24s24-10.7 24-24L80 24C80 10.7 69.3 0 56 0zM456 0c-13.3 0-24 10.7-24 24l0 464c0 13.3 10.7 24 24 24s24-10.7 24-24l0-464c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default DistributeSpacingHorizontal;