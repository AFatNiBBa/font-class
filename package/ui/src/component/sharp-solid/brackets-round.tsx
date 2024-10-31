
import { Icon } from "../../index";

/**
 * A component that renders the `brackets-round` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-round?s=sharp-solid brackets-round}
 * @preview ![brackets-round](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/brackets-round.svg)
 */
const BracketsRound: typeof Icon = x => (
    <Icon {...x}>
        <path d="M110.2 37.4l35.5 53.3C120.1 107.7 64 167 64 256s56.1 148.3 81.8 165.4l-35.5 53.3C71.9 449 0 371.8 0 256S71.9 62.9 110.2 37.4zm291.5 0C440.1 62.9 512 140.2 512 256s-71.9 193.1-110.2 218.6l-35.5-53.3C391.9 404.3 448 345 448 256s-56.1-148.3-81.8-165.4l35.5-53.3z" />
    </Icon>
);

export default BracketsRound;