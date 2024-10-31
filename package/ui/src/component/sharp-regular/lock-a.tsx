
import { Icon } from "../../index";

/**
 * A component that renders the `lock-a` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-a?s=sharp-regular lock-a}
 * @preview ![lock-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/lock-a.svg)
 */
const LockA: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48c44.2 0 80 35.8 80 80l0 32-160 0 0-32c0-44.2 35.8-80 80-80zM96 128l0 32-48 0L0 160l0 48L0 464l0 48 48 0 352 0 48 0 0-48 0-256 0-48-48 0-48 0 0-32C352 57.3 294.7 0 224 0S96 57.3 96 128zM48 208l48 0 48 0 160 0 48 0 48 0 0 256L48 464l0-256zM283.1 440l52.9 0L250.4 254.6l-1.8-3.8L240 232l-32 0-8.7 18.8-1.8 3.8L112 440l52.9 0 18.5-40 81.3 0 18.5 40zM224 311.9L242.5 352l-37 0L224 311.9z" />
    </Icon>
);

export default LockA;