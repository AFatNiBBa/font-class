
import { Icon } from "../../index";

/**
 * A component that renders the `person-dress` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dress?s=sharp-solid person-dress}
 * @preview ![person-dress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-dress.svg)
 */
const PersonDress: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM91.4 128l17.5 0 102.2 0 17.5 0 9.4 14.8 81.7 128-53.9 34.4-42-65.8L272 384l-40 0 0 96 0 32-64 0 0-32 0-96-16 0 0 96 0 32-64 0 0-32 0-96-40 0L96.2 239.4l-42 65.8L.2 270.8 82 142.8 91.4 128z" />
    </Icon>
);

export default PersonDress;