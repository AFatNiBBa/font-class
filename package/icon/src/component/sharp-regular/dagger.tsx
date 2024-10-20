
import { Icon } from "../../index";

/**
 * A component that renders the `dagger` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dagger?s=sharp-regular dagger}
 * @preview ![dagger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dagger.svg)
 */
const Dagger: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M216 0l0 24 0 104 8 0 48 0 40 0 24 0 48 0 0 48c0 26.5-21.5 48-48 48s-48-21.5-48-48l-16 0-48 0-32 0-32 0-48 0-16 0c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-48 48 0 24 0 40 0 48 0 8 0 0-104 0-24 48 0zM160 398.6L192 437l32-38.4L224 208l48 0 0 208-48.8 58.5L192 512l-31.2-37.5L112 416l0-208 48 0 0 190.6z" />
    </Icon>
);

export default Dagger;