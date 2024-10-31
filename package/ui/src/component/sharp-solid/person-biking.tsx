
import { Icon } from "../../index";

/**
 * A component that renders the `person-biking` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-biking?s=sharp-solid person-biking}
 * @preview ![person-biking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-biking.svg)
 */
const PersonBiking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M400 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm27.2 64L336 88 223.2 175.2c-30.7 23.8-28.5 70.8 4.3 91.6L288 305.1 288 448l64 0 0-177.1-57-38 60.3-48.5L404.8 224 512 224l0-64-84.8 0zM56 384a72 72 0 1 1 144 0A72 72 0 1 1 56 384zm200 0A128 128 0 1 0 0 384a128 128 0 1 0 256 0zm184 0a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zm200 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
    </Icon>
);

export default PersonBiking;