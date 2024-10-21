
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-up?s=duotone arrow-turn-up}
 * @preview ![arrow-turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-turn-up.svg)
 */
const ArrowTurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 480c0 17.7 14.3 32 32 32l96 0c53 0 96-43 96-96l0-306.7c-10.7-10.7-21.3-21.3-32-32c-10.7 10.7-21.3 21.3-32 32L160 416c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32 14.3-32 32z" />
        <path d="M41.4 182.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 77.3 86.6 182.6c-12.5 12.5-32.8 12.5-45.3 0z" />
    </Icon>
);

export default ArrowTurnUp;