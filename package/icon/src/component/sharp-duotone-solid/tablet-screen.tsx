
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablet-screen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen?s=sharp-duotone-solid tablet-screen}
 * @preview ![tablet-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tablet-screen.svg)
 */
const TabletScreen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L448 0l0 512L0 512 0 0zM64 64l0 320 48 0 224 0 48 0 0-320-48 0L112 64 64 64zm96 368l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0z" />
        <path d="M64 64H384V384H64V64z" />
    </Icon>
);

export default TabletScreen;