
import { Icon } from "../../index";

/**
 * A component that renders the `dagger` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dagger?s=sharp-solid dagger}
 * @preview ![dagger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dagger.svg)
 */
const Dagger: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0l0 32 0 96 80 0 32 0 48 0 0 48c0 26.5-21.5 48-48 48c-20.9 0-38.7-13.4-45.3-32L192 192l-98.7 0c-6.6 18.6-24.4 32-45.3 32c-26.5 0-48-21.5-48-48l0-48 48 0 32 0 80 0 0-96 0-32 64 0zM128 224l128 0 0 208-64 80-64-80 0-208z" />
    </Icon>
);

export default Dagger;