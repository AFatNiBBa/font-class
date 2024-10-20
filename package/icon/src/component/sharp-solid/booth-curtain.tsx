
import { Icon } from "../../index";

/**
 * A component that renders the `booth-curtain` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/booth-curtain?s=sharp-solid booth-curtain}
 * @preview ![booth-curtain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/booth-curtain.svg)
 */
const BoothCurtain: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0l96 0 0 64L64 64l0 416 0 32L0 512l0-32L0 32 0 0 32 0zM448 480l0-80c0 26.5-21.5 48-48 48s-48-21.5-48-48c0 26.5-21.5 48-48 48s-48-21.5-48-48c0 26.5-21.5 48-48 48s-48-21.5-48-48L160 0l96 0 96 0 96 0 32 0 32 0 0 32 0 448 0 32-64 0 0-32z" />
    </Icon>
);

export default BoothCurtain;