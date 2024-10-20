
import { Icon } from "../../index";

/**
 * A component that renders the `registered` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/registered?s=sharp-light registered}
 * @preview ![registered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/registered.svg)
 */
const Registered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 128l0 16 0 128 0 112 32 0 0-96 71 0 58.7 96 37.5 0L297.9 283.7C329.4 272.9 352 243.1 352 208c0-44.2-35.8-80-80-80l-96 0-16 0zm32 128l0-96 80 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-80 0z" />
    </Icon>
);

export default Registered;