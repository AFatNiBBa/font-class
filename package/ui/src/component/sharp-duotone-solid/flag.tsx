
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flag` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag?s=sharp-duotone-solid flag}
 * @preview ![flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/flag.svg)
 */
const Flag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 48l69-17.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0L448 16l0 320-55.5 20.8c-20.1 7.6-41.3 11.3-62.3 11.3c-27.3 0-54.5-6.3-79.4-18.7c-37.9-19-81.3-23.7-122.5-13.4L64 352 64 48z" />
        <path d="M64 0l0 32 0 448 0 32L0 512l0-32L0 32 0 0 64 0z" />
    </Icon>
);

export default Flag;