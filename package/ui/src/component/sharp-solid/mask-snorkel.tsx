
import { Icon } from "../../index";

/**
 * A component that renders the `mask-snorkel` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask-snorkel?s=sharp-solid mask-snorkel}
 * @preview ![mask-snorkel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mask-snorkel.svg)
 */
const MaskSnorkel: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 32l0 32 0 96-64 0 0 32 64 0 0 184c0 75.1-60.9 136-136 136l-8 0c-70.7 0-128-57.3-128-128l0-32 64 0 0 32c0 35.3 28.7 64 64 64l8 0c39.8 0 72-32.2 72-72l0-312 0-32 64 0zM0 64l448 0 0 224-176 0-32-64-32 0-32 64L0 288 0 64z" />
    </Icon>
);

export default MaskSnorkel;