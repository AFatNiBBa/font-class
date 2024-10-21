
import { Icon, generic } from "../../index";

/**
 * A component that renders the `distribute-spacing-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/distribute-spacing-vertical?s=duotone distribute-spacing-vertical}
 * @preview ![distribute-spacing-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/distribute-spacing-vertical.svg)
 */
const DistributeSpacingVertical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 208c0-26.5 21.5-48 48-48l224 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-224 0c-26.5 0-48-21.5-48-48l0-96z" />
        <path d="M24 32C10.7 32 0 42.7 0 56S10.7 80 24 80l464 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 32zm0 400c-13.3 0-24 10.7-24 24s10.7 24 24 24l464 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 432z" />
    </Icon>
);

export default DistributeSpacingVertical;