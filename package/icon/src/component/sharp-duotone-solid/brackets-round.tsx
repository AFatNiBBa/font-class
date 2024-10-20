
import { Icon, generic } from "../../index";

/**
 * A component that renders the `brackets-round` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-round?s=sharp-duotone-solid brackets-round}
 * @preview ![brackets-round](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/brackets-round.svg)
 */
const BracketsRound: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M366.2 90.6C391.9 107.7 448 167 448 256s-56.1 148.3-81.8 165.4l35.5 53.3C440.1 449.1 512 371.8 512 256S440.1 63 401.8 37.4L366.2 90.6z" />
        <path d="M0 256C0 140.2 71.9 62.9 110.2 37.4l35.5 53.3C120.1 107.7 64 167 64 256s56.1 148.3 81.8 165.4l-35.5 53.3C71.9 449 0 371.8 0 256z" />
    </Icon>
);

export default BracketsRound;