
import { Icon } from "../../index";

/**
 * A component that renders the `dagger` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dagger?s=sharp-thin dagger}
 * @preview ![dagger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/dagger.svg)
 */
const Dagger: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M200 0l0 8 0 120 40 0 16 0 56 0 64 0 8 0 0 8 0 32c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-24-48 0-16 0-40 0-16 0-40 0-16 0-48 0 0 24c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-32 0-8 8 0 64 0 56 0 16 0 40 0L184 8l0-8 16 0zM64 144l-48 0 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24l0-24zm256 0l0 24c0 13.3 10.7 24 24 24s24-10.7 24-24l0-24-48 0zM144 426.4l48 60 48-60L240 176l16 0 0 256-53.8 67.2L192 512l-10.2-12.8L128 432l0-256 16 0 0 250.4z" />
    </Icon>
);

export default Dagger;