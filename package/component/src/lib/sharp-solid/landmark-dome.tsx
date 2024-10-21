
import { Icon } from "../../index";

/**
 * A component that renders the `landmark-dome` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark-dome?s=sharp-solid landmark-dome}
 * @preview ![landmark-dome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/landmark-dome.svg)
 */
const LandmarkDome: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 0L224 0l0 34.7C143.6 48.1 80.1 111.6 66.7 192L64 192l-32 0 0 64 32 0 384 0 32 0 0-64-32 0-2.7 0C431.9 111.6 368.4 48.1 288 34.7L288 0zM0 464l0 48 512 0 0-48-64-48 0-128-64 0 0 128-40 0 0-128-64 0 0 128-48 0 0-128-64 0 0 128-40 0 0-128-64 0 0 128L0 464z" />
    </Icon>
);

export default LandmarkDome;