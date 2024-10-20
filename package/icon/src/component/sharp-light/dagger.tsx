
import { Icon } from "../../index";

/**
 * A component that renders the `dagger` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dagger?s=sharp-light dagger}
 * @preview ![dagger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/dagger.svg)
 */
const Dagger: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M208 0l0 16 0 112 32 0 32 0 32 0 64 0 16 0 0 16 0 32c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-16-16 0-32 0-32 0-32 0-32 0-32 0-16 0 0 16c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-32 0-16 16 0 64 0 32 0 32 0 32 0 0-112 0-16 32 0zM64 160l-32 0 0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16zm256 0l0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16-32 0zM144 404.4L192 462l48-57.6L240 192l32 0 0 224-59.2 71L192 512l-20.8-25L112 416l0-224 32 0 0 212.4z" />
    </Icon>
);

export default Dagger;