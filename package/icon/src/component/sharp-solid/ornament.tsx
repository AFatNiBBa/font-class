
import { Icon } from "../../index";

/**
 * A component that renders the `ornament` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ornament?s=sharp-solid ornament}
 * @preview ![ornament](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ornament.svg)
 */
const Ornament: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 96l-64 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32zm32 0l0-32c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 32L96 96l0 57.7C66.9 170.5 42.5 194.9 25.7 224l332.6 0c-16.9-29.1-41.2-53.5-70.3-70.3L288 96l-32 0zM0 320c0 22.4 3.8 44 10.9 64l362.2 0c7.1-20 10.9-41.6 10.9-64s-3.8-44-10.9-64L10.9 256C3.8 276 0 297.6 0 320zm25.7 96c33.2 57.4 95.2 96 166.3 96s133.1-38.6 166.3-96L25.7 416z" />
    </Icon>
);

export default Ornament;