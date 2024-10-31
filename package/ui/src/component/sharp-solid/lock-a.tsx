
import { Icon } from "../../index";

/**
 * A component that renders the `lock-a` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-a?s=sharp-solid lock-a}
 * @preview ![lock-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/lock-a.svg)
 */
const LockA: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 80 0 0 320L0 512 0 192l80 0zM268.7 408l16.7 40 34.7 0L240 256l-32 0L128 448l34.7 0 16.7-40 89.3 0zm-13.3-32l-62.7 0L224 300.8 255.3 376z" />
    </Icon>
);

export default LockA;