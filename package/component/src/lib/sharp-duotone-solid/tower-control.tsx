
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tower-control` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tower-control?s=sharp-duotone-solid tower-control}
 * @preview ![tower-control](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tower-control.svg)
 */
const TowerControl: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M-1 128l41 0 88 0 192 0 88 0 41 0L439 167.8 401 320l31 0 0 64-32 0-32 0L80 384l-32 0-32 0 0-64 31 0L9 167.8-1 128zm82 64L111 312.2 113 320l15 0 0-128-47 0zm95 0l0 128 96 0 0-128-96 0zm144 0l0 128 15 0 1.9-7.8L367 192l-47 0z" />
        <path d="M160 0l24 0 40 0 40 0 24 0 0 48-24 0-16 0 0 48 72 0 0 32-192 0 0-32 72 0 0-48-16 0-24 0 0-48zM368 384l0 128L80 512l0-128 288 0z" />
    </Icon>
);

export default TowerControl;