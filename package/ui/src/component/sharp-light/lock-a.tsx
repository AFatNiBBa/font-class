
import { Icon } from "../../index";

/**
 * A component that renders the `lock-a` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-a?s=sharp-light lock-a}
 * @preview ![lock-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/lock-a.svg)
 */
const LockA: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 128l0 64 192 0 0-64c0-53-43-96-96-96s-96 43-96 96zM96 192l0-64C96 57.3 153.3 0 224 0s128 57.3 128 128l0 64 64 0 32 0 0 32 0 256 0 32-32 0L32 512 0 512l0-32L0 224l0-32 32 0 64 0zM32 480l384 0 0-256L32 224l0 256zm232.7-80l-81.5 0-21.9 48-35.2 0 1.2-2.6 82-180 4.3-9.4 20.6 0 4.3 9.4 82 180 1.2 2.6-35.2 0-21.9-48zm-14.6-32L224 310.6 197.8 368l52.3 0z" />
    </Icon>
);

export default LockA;