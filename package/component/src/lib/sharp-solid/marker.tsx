
import { Icon } from "../../index";

/**
 * A component that renders the `marker` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/marker?s=sharp-solid marker}
 * @preview ![marker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/marker.svg)
 */
const Marker: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 352L0 512l160-32L292.7 347.3l-128-128L32 352zM187.3 196.7l128 128L485.5 154.5c17-17 26.5-40 26.5-64C512 40.5 471.5 0 421.5 0c-24 0-47 9.5-64 26.5L318.2 65.8 269.6 18.1l-17-16.7L235.8 18.2 111 143l-17 17L128 193.9l17-17L253 69l31.3 30.7-97 97z" />
    </Icon>
);

export default Marker;