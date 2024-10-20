
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turkish-lira-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turkish-lira-sign?s=sharp-duotone-solid turkish-lira-sign}
 * @preview ![turkish-lira-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/turkish-lira-sign.svg)
 */
const TurkishLiraSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M.2 138.4l30.7-9.1L64 119.5l0 66.8-14.9 4.4-30.7 9.1L.2 138.4zm0 96l30.7-9.1L64 215.5l0 66.8-14.9 4.4-30.7 9.1L.2 234.4zM128 100.5L246.9 65.3l30.7-9.1 18.2 61.4-30.7 9.1L128 167.3c0-22.2 0-44.5 0-66.8zm0 96l118.9-35.2 30.7-9.1 18.2 61.4-30.7 9.1L128 263.3c0-22.2 0-44.5 0-66.8z" />
        <path d="M128 32l0 32 0 352 64 0c70.7 0 128-57.3 128-128l0-32 64 0 0 32c0 106-86 192-192 192l-96 0-32 0 0-32L64 64l0-32 64 0z" />
    </Icon>
);

export default TurkishLiraSign;